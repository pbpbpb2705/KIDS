import classes from './HomeHeader.module.css';

function HomeHeader()
{
    return(
        <div className = {classes.container}>
            <img src = 'HImgHeader.png' alt = 'happy children'/>
        </div>
    );
}

export default HomeHeader;