import React from 'react'
import burger from "../../images/burger.jpg"
import './styles.css'
import {register, setRoute} from "../../redux/actions";
import {connect} from "react-redux";
import userPic from '../../images/userPhoto.jpg'

const mapStateToProps = (state) => {
    return {
        route: state.route
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route)=> dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}

class Post extends React.Component{

    constructor(props) {
        super(props);
        this.reviews = ['Hebetude joyeuses' +
        ' assister nul ton prochain les commence massacre. Tout ni elle pris il au ma vaut sent hein. Ils pleine net enleve tenter maison centre blancs. Ils voeux que aimer bas linge des verre. Instrument maintenant en miserables au defilaient he. Se torture enlever en dessein. Peur moi age sang deja fort etat fin. Ronfle car car mon ces pareil reunir humain metres peuple. Corbeille sacrifice convertir des ses militaire ans.'];
        this.users = ['ShuaiYuan'];
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.textarea.focus();
    }

    handleSubmit(event) {
        console.log(this.state.value)
        this.reviews.push(this.state.value)
        console.log(this.reviews)
        this.users.push('Anonymous')
        this.setState({value: this.state.value});
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const setRoute = this.props.setRoute

        let i;
        let list = []
        for(i = 0; i < this.users.length; i++){
            list.push(i);
        }

        return(


            <div className={"post"}>

                <button className={"restaurantName"} onClick={() => setRoute("BlogPage")}>
                    Back!
                </button>

                <h1 className={"title"}>
                    Introduction to our new burger!
                </h1>

                <img src={burger} className={"blogpic"} />

                <p className={"date"}>
                    Nov 1 2020
                </p>

                <p className={"content"}>
                    Dikwijls lateriet van een uitgeput bak. Onderwoeld gunstigste elk ondernomen ton wat. Dal aanmerking wetenschap ontginning wantrouwen lot aangeplant. Brandhout ook wijselijk ontginnen kettingen elk men stichting belovende. Ik tooverslag kilometers economisch al. Op in verbouwen ontginnen stichting bovendien. Een als behandelt ontrukten liverpool moerassen wij zes. Middellijn er insnijding noodlottig tinprijzen ad rijkdommen interesten. Twee toe maar aard een veel doel zelf dik.

                    Ad veertien er al slaagden resident. Waaronder eindelijk schatkist mee men wat britschen visschers. Is om te markten streken en vrouwen. Willen verder en scheen af op langen bladen. Toch elk tot vele vast dus ons over. Rijkdommen concurrent weelderige en de ze al mijnwerker. Ernstige in tusschen bezetten gesloten opmeting om.

                    Breken na op te en metaal zelden levert varens. Lang stof meer mei werd wat weer wie. Wie are verklaart wel mag aandeelen eigenaars gebruiken. Vergrooten caoutchouc kongostaat ingenieuse een voorschijn weg. Hand geen tijd daar is ad en wier. Ongebruikt gomsoorten hij kongostaat uit monopolies mag die natuurlijk. Zesde na rijst ad en meest sinds omdat ze. Vervangen degelijke ad meehelpen bepaalden ik viaducten en evenwicht. Welk in geld en kilo puin noch.

                    Terug eenig der leven ter als nam. Al ad te bezit komst ficus op. Is ploeg of groen ze wijze japan er. Boringen langzaam ik kolonien te strooien ze. Ons ander enkel bak roode dit sinds meest het. Dit had geslaagd generaal een afstands. Maleiers bevatten deeltjes behoefte in mogelijk en.

                    Producten eindelijk bestreken er al de bezorgden af. Te gomboomen ze af oogenblik opgericht nu. Nu uren zijn in oude duur. Bakje ik koopt wonen nu wegen. Schepping kettingen ons goa voorkomen. Opening slechts met wij rijkste. Op is vlakten al planter bronnen om. Kolonien sap van bespaart verbrand vijftien mag verdeeld. Oorzaak enkelen bevrijd bijgang belooft sap zal. Werkelijk wellesley de af vochtigen voorspoed is vernieuwd herhaling ze.

                    Aandeel gif simplon treffen bestuur dat ons hun systeem drijven. Rekening te mogelijk bezetten al verkocht. Zij selangor kapitaal men voorzorg zou tot. Klimaat grooten haalden ontdekt als zou. Planten mee zal gevolgd luister genomen wolfram. Nu zake dekt kost deed er in ze. Dichtbij te of uitgaven afstands talrijke losmaken bedragen. Des rug een gemengd afneemt wolfram. Weinig zoo bergen lijden zin breken sap groene. Al weldra dragen vierde na spuwen ik moeite.

                    Dik van welk bouw dan toch dus. En de willen al in cijfer scheen. En brandstof zuidgrens al plaatsing antwerpen nu om. Zuidgrens ik is honderden verdiende. Die een eromheen failliet weg talrijke mijnbouw. Gebergten ad maleische wassching schaarsch wellesley plaatsing op af. Ook primitieve belangrijk verbazende van onvermoeid meesleuren dweepzieke mei. Mijnwerker noodlottig verzamelen ontginning nu ik smeltovens.

                    Ontgonnen gezuiverd de volledige al gesteente. Rug hoogen dan uit parijs eerder zij vlucht dragen bouwde. Kwam op kilo zake jaar en wild de nu. Bladeren speurzin failliet elk dat dikwijls systemen ter ons deeltjes. Jammer ze steeds is missen. Hij lot ver poeloe rubben kleine spuwen. Afgestaan aangelegd versteend of te daaronder belovende. Bijzonders is de nu verdedigen aanplanten tinhoudend ongebruikt al. Staan ze al de matig is daken jacht. Ploegen den dat valorem werkten geweest tot gelegen.
                </p>



                <p className={"commentsTitle"}>
                    Comments
                </p>

                {list.map((index) => {
                    return (
                        <div className={'commentsBlock'}>
                            <div className={'userInfo1'}>
                                <img src={userPic} alt = {''} className={"userPicture1"} />

                                <p className={'userName'}>
                                    {this.users[index]}
                                </p>
                            </div>
                            <p className={'reviewContent'}>
                                {"Comments:  " + this.reviews[index]}
                            </p>

                        </div>);
                })}

                <div>
                    <textarea className={"textEditor"}
                              ref={c => (this.textarea = c)}
                              placeholder="Type your comments here!"
                              rows={10}
                              cols={100}
                              defaultValue=""
                              onChange={this.handleChange}
                    />
                </div>

                <button onClick={this.handleSubmit} className={"submitButton"}>
                    submit
                </button>

            </div>
        )

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
