import { Text, View } from 'react-native';
import styled from 'styled-components';

const AboutScreen = () => {
    return (
        <ViewView>
            <ViewText>
                PSP
            </ViewText>
        </ViewView>
    );
}


export default AboutScreen;



const ViewView= styled(View)`
flex: 1;
 align-items:center;
 justify-content:center;
`

const ViewText=styled(Text)`
    fontSize: 140px;
    color: blue;
`