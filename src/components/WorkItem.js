import React from 'react';
import moment from 'moment';

const WorkItem = props => {
    const getWorkDates = () => {
      console.log(props);
        const startdate = moment(props.work.startDate).format('MMM, YYYY');
        console.log(startdate);
        let enddate = null;
        if (props.work.endDate !== '') {
          enddate = moment(props.work.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }


    return (
        <div className="workItem">
          <h3>{props.work.position}, <span>{props.work.company}</span></h3>
          <p className="workDates">{getWorkDates()}</p>
          <p>{props.work.summary}</p>
         
        </div>
    )
};

export default WorkItem;