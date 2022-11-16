export const Item = () => {

    const weight = ['250gr', '500gr', '1000gr']

    return (
        <div className="container text-center">
            { weight.map(wgt => <button
                key={ wgt }
                className='col-2 mx-2 px-2 btn btn-secondary'
            >{ wgt }</button>) }
        </div>
    )
}