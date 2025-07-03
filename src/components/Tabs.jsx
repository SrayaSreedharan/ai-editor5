import React, { useState } from 'react'

const Tabs = () => {
     const [active,setActive] = useState('1')

    const renderComponent = (name) =>{
        let component = null

        switch (name) {
            case '1':
                component = <p>ghjhkghfdg ghfgh</p>
              
                break;

            default:
                break;
        }
        
        return component

    }

  return (
    <>
    <div>
        <button>one</button>
        <button>two</button>
        <button>three</button>
      
    </div>
    <div>
        {/* render corresponding component */}
        {renderComponent(active)}

    </div>
    </>
  )
}

export default Tabs
