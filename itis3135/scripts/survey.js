document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('webForm');
    const coursesContainer = document.getElementById('coursesContainer');
    const addCourseButton = document.getElementById('addCourseButton');

    //Function to add courses 
    addCourseButton.addEventListener('click', () => {
        const newCourseField = document.createElement('div');
        newCourseField.classList.add('course-field');

        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'current-courses[]';
        inputField.placeholder = 'Enter a course';
        inputField.required = true;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.type = 'button';
        deleteButton.addEventListener('click', () => {
            newCourseField.remove();
        });

        newCourseField.appendChild(inputField);
        newCourseField.appendChild(deleteButton);
        coursesContainer.appendChild(newCourseField);
    });

    //Function for after submission
    function displayFormData(event) {
        event.preventDefault();
        const formData = new FormData(form);
            
        const formContent = document.createElement('div');
        formContent.classList.add('form-content');

        const dataFields = [
            { label: 'Name', value: formData.get('name') },
            { label: 'Mascot', value: formData.get('mascot') },
            { label: 'Image Caption', value: formData.get('image-caption') },
            { label: 'Personal Background', value: formData.get('personal-background') },
            { label: 'Professional Background', value: formData.get('professional-background') },
            { label: 'Academic Background', value: formData.get('academic-background') },
            { label: 'Background in Web Development', value: formData.get('web-develop-background') },
            { label: 'Primary Computer', value: formData.get('primary-computer') },
            { label: 'Funny Thing', value: formData.get('funny-thing') },
            { label: 'Anything Else', value: formData.get('anything-else') },
            { label: 'Courses Currently Taking', value: formData.getAll('current-courses[]').join(', ') },
            { label: 'Agree', value: formData.get('agree') === 'agree' ? 'Yes' : 'No' }
        ];

        dataFields.forEach((field) => {
            const fieldDiv = document.createElement('div');
            fieldDiv.classList.add('form-field');
            
            const label = document.createElement('label');
            label.textContent = field.label;
            fieldDiv.appendChild(label);
            
            const value = document.createElement('div');
            value.classList.add('form-value');
            value.textContent = field.value;
            fieldDiv.appendChild(value);

            formContent.appendChild(fieldDiv);
        });

        const imageInput = formData.get('image');
        if (imageInput) {
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('form-field');

            const label = document.createElement('label');
            label.textContent = 'Uploaded Image:';
            imageDiv.appendChild(label);

            const img = document.createElement('img');
            img.classList.add('uploaded-image');
            img.src = URL.createObjectURL(imageInput); 
            img.alt = formData.get('image-caption'); 

            imageDiv.appendChild(img);
            formContent.appendChild(imageDiv);
        }

        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset Form';
        resetButton.id = 'resetFormButton';
        formContent.appendChild(resetButton);

        document.querySelector('main').innerHTML = '';
        document.querySelector('main').appendChild(formContent);


        //Function to reset form
        document.getElementById('resetFormButton').addEventListener('click', () => {
            location.reload();
        });
    }

    //Function to make sure form won't submit if required info isn't input
    form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
            alert('Please fill out all required information!');
            event.preventDefault(); 
        } else {
            displayFormData(event);
        }
    });

    
});