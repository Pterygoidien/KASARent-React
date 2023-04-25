import spinner from '../../assets/images/spinner.gif';

const Spinner = () => {

    return (
        <>
            <img
                width={100}
                src={spinner} alt="Chargement...."
                className="mx-auto" />
        </>
    )
}
export default Spinner;