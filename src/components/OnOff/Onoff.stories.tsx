import { OnOff } from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default  {
    title: 'OnOff',
    component: OnOff
}

export const OffMode = () => <OnOff switchOn={false} setSwitchOn={action('on or off clicked')}/>
export const OnMode = () => <OnOff switchOn={true} setSwitchOn={action('on or off clicked')}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <OnOff switchOn={value} setSwitchOn={setValue}/>
}