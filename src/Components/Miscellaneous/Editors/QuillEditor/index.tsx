import { Container, Row } from 'reactstrap'
import BubbleTheme from './BubbleTheme'
import SnowTheme from './SnowTheme'
import StandardEditor from './StandardEditor'

const QuillEditorContainer =() =>{
    return (
        <Container fluid>
            <Row>
                <StandardEditor/>
                <SnowTheme/>
                <BubbleTheme/>
            </Row>
        </Container>
    )
}
export default QuillEditorContainer