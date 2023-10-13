

export const QuantityInput = ({ level1, level2, level3, showLevels }) => {
    return (
      <>
        <label><b>Quantity</b></label> <br/>
        <div className='mt-2'>
          <label htmlFor="level_1" className='mr-2'>Level 1:</label>
          <input name="level_1" id="level_1" className='w-[30%] h-8' type='text' defaultValue={level1} />
        </div>
        {showLevels && (
          <>
            <div className='mt-2'>
              <label htmlFor="level_2" className='mr-2'>Level 2:</label>
              <input name="level_2" id="level_2" className='w-[30%] h-8' type='text' defaultValue={level2} />
            </div>
            <div className='mt-2'>
              <label htmlFor="level_3" className='mr-2'>Level 3:</label>
              <input name="level_3" id="level_3" className='w-[30%] h-8' type='text' defaultValue={level3} />
            </div>
          </>
        )}
      </>
    );
  };