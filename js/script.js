{
    const onFormSubmit = () => {
        const amountElementDolarZloty = document.querySelector(".js-amountDolarZloty");
        const rateElementDolarZloty = document.querySelector(".js-rateDolarZloty");
        const resultElementDolarZloty = document.querySelector(".js-resultDolarZloty");

        const amountDolarZloty = amountElementDolarZloty.value;
        const rateDolarZloty = rateElementDolarZloty.value;
        const resultDolarZloty = amountDolarZloty * rateDolarZloty;

        resultElementDolarZloty.innerText = amountDolarZloty < 0 ? "N/A" : resultDolarZloty.toFixed(2);
    }

    const init = () => {
        const formElementDolarZloty = document.querySelector(".js-formDolarZloty");
        formElementDolarZloty.addEventListener("input", onFormSubmit);
    }
    
    init();
}

{

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElementZlotyDolar = document.querySelector(".js-amountZlotyDolar");
        const rateElementZlotyDolar = document.querySelector(".js-rateZlotyDolar");
        const resultElementZlotyDolar = document.querySelector(".js-resultZlotyDolar");

        const amountZlotyDolar = amountElementZlotyDolar.value;
        const rateZlotyDolar = rateElementZlotyDolar.value;
        const resultZlotyDolar = amountZlotyDolar * rateZlotyDolar;

        resultElementZlotyDolar.innerText = resultZlotyDolar.toFixed(2);
    }

    const init = () => {
        const formElementZlotyDolar = document.querySelector(".js-formZlotyDolar");
        formElementZlotyDolar.addEventListener("submit", onFormSubmit);
    }

    init();
}