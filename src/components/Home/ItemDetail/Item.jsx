export const Item = () => {

    const weight = ['250', '500', '750', '1000', '2000']

    return (
        <div className="container text-center">
            { weight.map(wgt => <button
                key={ wgt }
                className='col-1 mx-2 px-2 btn btn-secondary'
            >{ wgt }</button>) }
        </div>
    )
}