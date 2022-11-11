import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
        {options.map(name => {
            return (
                <button
                key={name}
                name={name}
                onClick= {() => onLeaveFeedback(name)}

                type="button">
                {name}
              </button>
            );
          })}
        </>  
    )}
    
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};