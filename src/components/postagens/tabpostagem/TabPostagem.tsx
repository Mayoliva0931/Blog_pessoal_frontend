import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='bg2-menu'>
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab className='label' label= "Todas as Postagens" value="1"/>
            <Tab  label="Sobre Nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo"> Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Olá, meu nome é Mayara, sou formada em designer de interiores e atualmente estou em transição de carreira para área da tecnologia. Minhas experiências foram todas dentro do comércio como vendedora, operadora de caixa e subgerente, onde aprendi a trabalhar em equipe, e ter calma e paciência para resoluções de problemas. 
            Tenho experiência na criação de ambientes funcionais e estéticos, e aprendi como aplicar as tendências de design na criação de aplicações digitais. Estou animada para começar um novo capítulo na minha carreira e acredito que minhas habilidades em design e criatividade vão ajudar a me destacar na tecnologia.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;