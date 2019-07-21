//import Form from '@/components/Form'
const Form = () => import("@/components/Form")

const FormRouter = { 
        path: '/form', 
        component: Form,
        name: 'form'
    }

export default FormRouter