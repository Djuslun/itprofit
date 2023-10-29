import { inputs, removeValidClass, submitValidate } from './validateInput';
import { submitButtonError } from './animateForm';
import { showMessageWindow } from './showMessage'
const form = document.querySelector('form');

function postData(form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submitValidate()

    let isformValid = inputs.every(({ isValide }) => isValide)

    let object = {};
    const formData = new FormData(form);

    formData.forEach(function (value, key) {
      object[key] = value;
    });

    try {
      if (!isformValid) {
        throw new Error("Validate error")
      }
      try {
        let response = await fetch('http://localhost:9090/api/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(object)
        });
        let result = await response.json();
        if (response.ok) {
          showMessageWindow(result.ok)
          form.reset();
          removeValidClass();
          console.log(result)
        } else {
          throw new Error('Submit error')
        }
      } catch (error) {
        console.log(error.message)
        showMessageWindow(false)
      }
    } catch (error) {
      submitButtonError();
      console.log(error.message)
    }
  })
}

postData(form);

