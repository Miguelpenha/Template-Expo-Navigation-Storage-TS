import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Header, ContainerSettings, Settings, Title, Technologies, ContainerTechnology, IconTechnology, Technology } from './style'
import technologies from './technologies'

export default function Home() {
  const navigation = useNavigation()

  return (
    <ContainerPd>
      <Header>
        <ContainerSettings onPress={() => navigation.navigate('Settings')}>
          <Settings name="settings" size={40}/>
        </ContainerSettings>
      </Header>
      <Title>Template Expo</Title>
      <Technologies>
        {technologies.map((technology, index) => (
          <ContainerTechnology key={index}>
            <IconTechnology name="check-circle" size={20}/>
            <Technology>{technology}</Technology>
          </ContainerTechnology>
        ))}        
      </Technologies>
    </ContainerPd>
  )
}