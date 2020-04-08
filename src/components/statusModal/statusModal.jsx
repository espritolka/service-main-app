import React,  {useEffect} from 'react';
import PropTypes from 'prop-types';
import MainButtom from '../generic/button/button';
import Text from '../generic/text/text';
import * as methods from '../../methods/index'
import './statusModal.scss';

const StatusModal = (props) => {
 
  const { alertCustom, data, onClose } = props;

  const getModal = (isOpen) =>{

    if (isOpen){
        return (
            <div className='dark-box'> 
                <div className='main-box'>
                       <Text type='big'>Поздравляем!</Text>
                        <div className='info-box-modal'>
                           <Text>Вы записались на <b className='text-primary'>{data.service.name}</b></Text>
                            <Text>к мастеру <b className='text-primary'>{data.schedule.master.name}</b></Text>               

                            <Text>Ждем вас <b className='text-primary'>{data.schedule.date.getDate() + " " +
                           methods.getMonthText(data.schedule.date.getMonth())}</b></Text>
                            <Text>в <b className='text-primary'>{data.schedule.time.label}</b></Text>
                            <Text>По адресу м.Свободное ул.Проектируемая 55/5</Text> 
                        </div>
                    <MainButtom className ='button-modal' onClickButton={() => {onClose()}}>ОК</MainButtom>
               </div>
            </div> )
    } else {
      return  null
    }

}

    return(
        <div>
         {getModal(alertCustom)}
        </div>
    )
}

StatusModal.propTypes = {
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
            }),
        }),
        service: PropTypes.shape({
            _id: PropTypes.string,
            name:PropTypes.string.isRequired
        })

    })
}

StatusModal.defaultProps = {
    status: false,
}

export default StatusModal;