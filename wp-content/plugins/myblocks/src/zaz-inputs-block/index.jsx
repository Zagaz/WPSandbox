import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Icon from './icon';
import './style.scss';

// Register the block
registerBlockType('zaz-inputs/myblock', {
    title: 'ZAZ - Inputs',
    icon: Icon,
    category: 'common',
    attributes: {
        name: {
            type: 'string',
            default:""
            
        },
        ship: {
            type: 'string',
            default:""
        },
        test: {
            type: 'boolean',
            default: false
        }
    },

    edit: ({ attributes, setAttributes }) => {

        function onChangeName(event) {
            setAttributes({ name: event.target.value });
        }
        function onChangeShip(event) {
            setAttributes({ ship: event.target.value });
        }
        function onChangeCheckBox(event) {
            setAttributes({ test: event.target.checked });
        }

        return (
            <>
            
                <div>
                    <h3>Some inputs</h3>
                    
                    <label htmlFor="name">Name: </label>
                    <input type="text" value={attributes.name} id="name" onChange={onChangeName} /> 
                    {!attributes.name && <small id='sname'> Can't be empty </small>  }
                     
                    <br />
                    <br />

                    <label htmlFor="ship">Ship: </label>
                    <select name="ship" id="ship" value={attributes.ship} onChange={onChangeShip}>
                        <option value="" placeholder='Choose a ship'></option>
                        <option value="Enteprise"> USS Enterprise </option>
                        <option value="Enterprise-D"> USS Enterprise-D </option>
                        <option value="Enterprise-E"> USS Enterprise-E </option>
                        <option value="Deepspace 9"> Deepsape 9 </option>
                        <option value="Voyager"> USS Voyager </option>
                    </select>
                    
                    {!attributes.ship && <small id='sship'> Must choose one </small>}
                
                    <br />
                    <br />
                    
                    <label htmlFor="checkbox"> Engage! </label>
                    <input type="checkbox" name="checkbox" id="checkbox" value={attributes.name} onChange={onChangeCheckBox} />
                    
                {!attributes.test && <small id='scheckbox'> Must be checked to show on frontend </small>}
                    <hr />
                    {attributes.name &&
                    <div>
                        Name: {attributes.name}
                    </div>}
                    {attributes.ship &&
                    <div>
                        Ship: {attributes.ship}
                    </div>}
                    {attributes.test &&
                    <div>
                        Checkbox: Make it so!
                    </div>}
                 </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const { name, ship, test } = attributes;
        return (
            <>
                <div>
                    <h3>Inputs block</h3>
                </div>
                {name && ship && test && <h4> {name} is the captain of ship {ship}. </h4>}
                <hr />
            </>
        );
    }
});




