import PropTypes from 'prop-types';

const message = "Hello World";
const number = 173;
const array = [1,2,3,4,5,6,7,8,9];
const object = {
    name: "Kim",
    email: "kim@gmail.com"
};

const getResult = (a, b) => {
    return a+b;
}

export const FirstApp = ({title="BCS", subtitle, year, month}) => {

    return (
    <>
        <h2>{message}</h2>
        <h2>{number}</h2>
        <h2>{array}</h2>
        <h2>{array}</h2>
        <h2>{object.name}</h2>
        <code>{JSON.stringify(object)}</code>

        <h2>{getResult(2, 4)}</h2>

        <p>Better Call Saul</p>

        <h1 data-testid="test-title">{title}</h1>
        <h2>{subtitle}</h2>
        <h2>{year}</h2>
        <h2>{month}</h2>
    </>
    );
}

FirstApp.propTypes = {
    subtitle: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    month: 99
}