import Input from './Input';
import Button from './Button';

function FormContainer() {
    return (
        <div className="container is-max-desktop">
            <div className="notification is-primary">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
                <Button />
            </div>
        </div>
    )
}

export default FormContainer;