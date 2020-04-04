import React from 'react';
import PropTypes from 'prop-types';



const statusModal = (props) => {



    return(
        <div></div>
    )
}

statusModal.propTypes = {
    status: PropTypes.bool,
    data: PropTypes.shape({
        schedule: PropTypes.shape({
            master: PropTypes.shape({
                _id: PropTypes.string,
                name:PropTypes.string.isRequired
            }),
            time: PropTypes.shape({
                _id: PropTypes.string,
                label:PropTypes.string.isRequired
            })
        }),
        date: PropTypes.string.isRequired,
        service: PropTypes.shape({
            _id: PropTypes.string,
            name:PropTypes.string.isRequired
        })

    })
}

statusModal.defaultProps = {
    status: false,
}

export default statusModal;