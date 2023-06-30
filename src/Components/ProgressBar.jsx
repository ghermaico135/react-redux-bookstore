import PropTypes from 'prop-types';
import '../Components/styles/progressBar.css'; 

const CircularProgressBar = ({ progress }) => {
  const radius = 50; 
  const circumference = 2 * Math.PI * radius; 
  const offset = circumference - (progress / 100) * circumference; 
  return (
    <div className="circular-progress-bar">
      <svg className="progress-ring" width="120" height="120">
        <circle
          className="progress-ring__circle"
          strokeWidth="10"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset: offset }}
          r={radius}
          cx="60"
          cy="60"
        />
      </svg>
      {/* <span className="progress">{progress}%</span> */}
    </div>
  );
};

CircularProgressBar.propTypes = {
  progress: PropTypes.number,
  
};

export default CircularProgressBar;