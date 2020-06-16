import React, {useState, FormEvent, ChangeEvent} from 'react';
import { Grid, Input } from '@material-ui/core';
import { Btn } from '../elements/Button';
// import { browserUrl } from "../../utils/url";

function Main() {
    const [input, setInput] = useState({from: "", to:""});

    function mapsSelector() {
        if 
            ((navigator.platform.indexOf("iPhone") !== -1) || 
            (navigator.platform.indexOf("iPad") !== -1) || 
            (navigator.platform.indexOf("iPod") !== -1)) {
            window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
        }
        else {
            // let url = `https://www.google.com/maps/search/?api=1&query=${input.from},${input.to}`
            // let url = `https://www.google.com/maps/search/?api=1&query=${input.to}`
            //This works
            let url =  "https://maps.google.com/?saddr=My+Location&daddr=53.9187068,27.5862874"
            // window.open(browserUrl(input));
            window.open(url);
        }
      }

      function handleChange(e: ChangeEvent<HTMLInputElement>){
        setInput({...input, [e.target.name]: e.target.value});
        console.log(e.target.value);
      }

    return (         
        <Grid 
            container 
            justify="center"
            direction="column" 
            alignItems="center"
            style={{height: "100vh"}}
            >
            <Grid item>
                <Input 
                    name="from"
                    onChange={handleChange}
                    value={input.from} />
            </Grid>
            <br />
            <Grid item>
                <Input 
                    name="to"
                    onChange={handleChange}
                    value={input.to} />
            </Grid>
            <br />
            <Grid item>
                <Btn variant="contained" onClick={mapsSelector}>Avaa kartat</Btn>              
            </Grid>
        </Grid>
    );
}

export default Main;