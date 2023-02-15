import React, {useReducer, useState } from 'react';
var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyn8jGbP5zawOtee'}).base('appoJJtmyj0A524LY');

const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name] :  event.target.value
    }
}

function form() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        base('one-link_data').create([
            {
              "fields": formData
            }
          ], function(err, records) {
            if (err) {
              console.error(err);
              return;
            }
            records.forEach(function (record) {
              console.log(record.getId());
            });
          });
        setSubmitting(true);
    }

    setTimeout(() => {
        setSubmitting(false);
    }, 3000)

    return(
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" onChange={setFormData}/>
                    </label>
                    <label>
                        <p>Number</p>
                        <input name="number" onChange={setFormData}/>
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default form;