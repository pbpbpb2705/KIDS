import classes from './HomeHeader.module.css';

function HomeHeader()
{
    return(
        <div className = {classes.container}>
            <img src = 'HImgHeader.png' alt = 'happy children'/>
            <div className = {classes.textbox}>
                <h1>
                    Some kind of slogan
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare dui ac tortor semper scelerisque. Nullam in lobortis justo. Integer consectetur tincidunt nisl in malesuada. Integer laoreet venenatis lorem a semper. Cras nec vulputate lacus. Sed eget feugiat magna. Donec semper libero non mauris dignissim efficitur. Pellentesque a porta tortor. Donec et rhoncus velit, nec finibus velit.
                </p>
            </div>
        </div>
    );
}

export default HomeHeader;