import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
const Form = ({onClose}) => {
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState('');
  const [valid, setValid] = useState(false);
  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm(
    {mode: "all"}
  );

  const changeFeature = (e) => {
    if (e.target.checked) {
      setPrice(price + Number(e.target.value))
    } else {
      setPrice(price - Number(e.target.value))
    }
  };

  const changeProduct = (e) => {
    if (product === '') {
      setPrice(price + Number(e.target.value))
      setProduct(e.target.value);
    } else {
      setPrice(price + Number(e.target.value) - Number(product));
      setProduct(e.target.value);
    }
  }

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  }

  useEffect(() => {
    if(isValid && product !== '') {
      setValid(true);
    }
  }, [isValid, product]);

  return(
    <form onSubmit={handleSubmit(onSubmit)} id="registration" action="#" className="popup__form" name='registration' noValidate>

      <input {...register('firstName', {
        required: "The field must not be empty",
      })} type="text" className="popup__input popup__input_form_firstName" id="firstName" name="firstName" placeholder="First Name *" required/>
      {errors?.firstName && <span className='popup__error'>{errors.firstName.message}</span>}

      <input {...register('lastName', {
        required: "The field must not be empty",
      })} type="text" className="popup__input popup__input_form_lastName" id="lastName" name="lastName" placeholder="Last Name *" required/>
      {errors?.lastName && <span className='popup__error'>{errors.lastName.message}</span>}

      <input {...register('mail', {
        required: "The field must not be empty",
        pattern: {
          value: /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,
          message: "Enter a valid email address"
        }
      })} type="email" className="popup__input popup__input_form_mail" id="mail" name="mail" placeholder="user@gmail.com *" required/>
      {errors?.mail && <span className='popup__error'>{errors.mail.message}</span>}

      <div className="product-types">
        <label className="label" htmlFor="product-select">Product type *</label>
        <div className="select-wrapper">
          <select {...register('type')} className="select" name="type" id="product-select" defaultValue={''} onChange={changeProduct}>
            <option value="" disabled>Select product type</option>
            <option value="250">Website</option>
            <option value="550">Mobile app</option>
          </select>
        </div>
      </div>
      <div className="future-switch">
        <span className="future-name">Additinal feature for $100</span>
        <label className="switch">
          <label htmlFor="checkbox-switch-100"></label>
          <input {...register('firstFeature')} type="checkbox" id="checkbox-switch-100" value="100" onChange={changeFeature}/>
          <span className="slider"/>
        </label>
      </div>
      <div className="future-switch">
        <span className="future-name">Additinal feature for $200</span>
        <label className="switch">
          <label htmlFor="checkbox-switch-200"></label>
          <input {...register('secondFeature')} type="checkbox" id="checkbox-switch-200" value="200" onChange={changeFeature}/>
          <span className="slider"/>
        </label>
      </div>
      <textarea {...register('comment')} className="comment" name="comment" rows="4" placeholder="Type your comment"></textarea>
      <div className="total-price">
        <span className="total">Total price</span>
        <span className="total">${price}</span>
      </div>
      <button onClick={onClose} disabled={!valid} className="popup__button" type="submit">Send form</button>
    </form>
  );
}

export default Form;