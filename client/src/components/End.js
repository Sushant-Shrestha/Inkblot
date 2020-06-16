import React from 'react';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PDF from './PDF.js';
import {useReactToPrint} from "react-to-print";
import Modal from 'react-modal';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
    main: {
        textAlign: "center",
        margin: "5em 0"
    },
    heading: {
        fontSize: "30px",
        fontWeight: "300",
        marginBottom: "1.5em"
    },
    content: {
        textAlign: "left",
        width: "460px",
        margin: "0 auto 5em"
    },
    button: {
        borderRadius: "0",
        textTransform: 'none',
        fontStyle: "italic",
        width: "164px",
        fontSize: "12px"
    },
    icons: {
        margin: "0 2em 3em 0"
    }
}));

// Modal.setAppElement()

export default function End(props) {
    const[modalIsOpen, setIsOpen] = React.useState(false);
    
    const aboutPage = () => {
        
        props.test();
        props.changePage(9);
    }

    const classes = useStyles();

    const pdfRef = React.useRef();
    const handlePrint = useReactToPrint({
        content: () => pdfRef.current,
    });    

    const save = () => {
        openModal();
        // const input = document.getElementById('test');
        // html2canvas(input)
        //     .then((canvas) => {
        //         document.body.appendChild(canvas);
        //         const imgData = canvas.toDataURL('image/png');
        //         const pdf = new jsPDF();
        //         pdf.addImage(imgData, 'PNG', 0, 0);
        //         pdf.save('Inkblot.pdf');
        //     })
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return(
        <div className={classes.main}>
            <h3 className={classes.heading}>You’ve completed the Rorscach Test</h3>
            <div className={classes.icons}><PrintOutlinedIcon onClick={handlePrint} style={{marginRight: "0.5em"}}/> <SaveAltIcon onClick={save}/></div>
            <p className={classes.content}>Like art, the Rorscach test is made to behave in ambiguity. It is up to the interpreter to understand what the inkblots mean to them and what parts of the unconscious they use to make decisions. We have provided the measurements to your test, it is to you to decide who you are.</p>
            <Button variant="outlined" className={classes.button} endIcon={<ArrowForwardIcon/>} onClick={aboutPage}>About Rorscach</Button>
            <div className='hidden'>
                <PDF data={props.data} ref={pdfRef}/>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <CloseIcon onClick={closeModal}/>
                <PDF data={props.data}/>
            </Modal>
        </div>
    )
}