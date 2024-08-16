import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';
import FertilizerMenu from '../menu-item/images/fertilizer-menu-item.jpeg.jpg';
import PestMenu from '../menu-item/images/pestcontrol-menu-item.jpg';
import SeedsMenu from '../menu-item/images/seeds-menu-item.jpg';
import CropProtMenu from '../menu-item/images/cropprotection-menu-item.jpg';
import OrganicMenu from '../menu-item/images/organic-menu-item.jpg';

class Directory extends React.Component {
    constructor() {
        super();
            
            this.state = {
                sections: [
                    {
                        title: 'Crop Protection',
                        imageUrl: CropProtMenu,
                        id: 4
                    },
                    {
                        title: 'Pest Control',
                        imageUrl: PestMenu,
                        id: 2
                    },
                    {
                        title: 'Seeds',
                        imageUrl: SeedsMenu,
                        id: 3
                    },
                    {
                        title: 'Fertilizers',
                        imageUrl: FertilizerMenu,
                        id: 1,
                        size: 'large' 
                    },
                    {
                        title: 'Organic Inputs',
                        imageUrl: OrganicMenu,
                        id: 5,
                        size: 'large'
                    }
                ]
            }
    }
    
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        );
    }
}

export default Directory;