import classes from './HomeHeader.module.css';

function HomeHeader()
{
    return(
        <div className = {classes.container}>
            <img src = 'HImgHeader.png' alt = 'happy children'/>
            <div className = {classes.textbox}>
                <h1>
                    KIDS VIETNAM
                </h1>
                <p>
                    KIDS VIETNAM (Kids in Difficult Situations in Vietnam) is a non-profit organization with missions to improve the lives of underprivileged children.
                </p>
            </div>
        </div>
    );
}

export default HomeHeader;