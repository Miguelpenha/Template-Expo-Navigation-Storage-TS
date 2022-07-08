import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Header = styled.View`
    margin-top: 14%;
    flex-direction: row;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-left: 2%;
    margin-right: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const Title = styled.Text`
    margin-top: 10%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.8)}px;
    color: ${props => props.theme.primary};
`

export const Technologies = styled.View`
    margin-top: 8%;
    align-self: center;
`

export const ContainerTechnology = styled.View`
    margin-bottom: 2%;
    flex-direction: row;
    align-items: center;
`

export const IconTechnology = styled(MaterialIcons)`
    margin-right: 3.5%;
    color: ${props => props.theme.primary};
`

export const Technology = styled.Text`
    font-size: ${RFPercentage(2.8)}px;
    color: ${props => props.theme.secondaryColor};
`