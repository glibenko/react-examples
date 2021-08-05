import React from 'react';
import OldLifeCycle from './OldLifeCycle';
import NewLifeCycle from './NewLifeCycle';

const LifeCycle = () => {
  return (
    <div> 
      {true
        && <OldLifeCycle
            killOld={this.killOld}
            changeProps={this.changeProps}
            someProps={this.state.someProps}
          />
      }
      {false// this.state.showOld
        && <NewLifeCycle
            killOld={this.killOld}
            changeProps={this.changeProps}
            someProps={this.state.someProps}
          />
      }
    </div>
  );
}

export default LifeCycle;
