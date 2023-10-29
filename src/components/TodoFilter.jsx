import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/todoAction';

const TodoFilter = ({ setVisibilityFilter, visibilityFilter }) => {
  const handleFilterChange = (filter) => {
    setVisibilityFilter(filter);
  };

  return (
    <div className="flex justify-start flex-wrap mt-6 mb-8">
      <button 
        onClick={() => handleFilterChange('SHOW_ALL')}
        className={`bg-${visibilityFilter !== 'SHOW_ALL' ? 'blue-500' : 'green-500'} text-white mr-2 px-2 py-1 rounded-md`}
        style={{ backgroundColor: visibilityFilter !== 'SHOW_ALL' ? '#3AA6B9' : '#FF9EAA' }}
      >
        All
      </button>
      <button 
        onClick={() => handleFilterChange('SHOW_ACTIVE')}
        className={`bg-${visibilityFilter !== 'SHOW_ACTIVE' ? 'blue-500' : 'green-500'} text-white mr-2 px-2 py-1 rounded-md mx-2`}
        style={{ backgroundColor: visibilityFilter !== 'SHOW_ACTIVE' ? '#3AA6B9' : '#FF9EAA' }}
      >
        Active
      </button>
      <button 
        onClick={() => handleFilterChange('SHOW_COMPLETED')}
        className={`bg-${visibilityFilter !== 'SHOW_COMPLETED' ? 'blue-500' : 'green-500'} text-white px-2 py-1 rounded-md mx-2`}
        style={{ backgroundColor: visibilityFilter !== 'SHOW_COMPLETED' ? '#3AA6B9' : '#FF9EAA' }}
      >
        Completed
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    visibilityFilter: state.visibilityFilter
  };
};

const mapDispatchToProps = {
  setVisibilityFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
