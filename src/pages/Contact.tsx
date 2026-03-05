
import ContactForm from '../components/Contact';
import DecorativeLines from '../components/DecorativeLines';

const Contact = () => {
    return (
        <div className="pt-20">
            <DecorativeLines>
                <ContactForm />
            </DecorativeLines>
        </div>
    );
};

export default Contact;
