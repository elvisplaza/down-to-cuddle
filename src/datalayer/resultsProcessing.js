import image1 from '../presentation/assets/image1.jpg'



const utils = {
    convertValueToResult: (quizValue) => {
        let answer = false
        
        // const answerObject ={
        //     answer:false,
        //     imagePath:""
        
        if (quizValue >= 80) {
            answer = "You've had a pretty productive day, you've probobly spent a majority of your day feeling really good. I'd recommend sleeping by yourself and enjoying the whole bed. Grab a pillow and use that as your cuddle buddy for tonight!";
            // answerObject.imagePath = image1
        } else if (quizValue >= 50) {
             answer = "Your day wasn't the greatest but you've had some wins! You definitely need that end of the day win, call up your partner and ask for a cuddle night. I'd recommend being big spoon ";
        } else if (quizValue >= 30) {
             answer = " HMM, not your bed day today huh? that's ok, you know what would be awesome? cuddling! You know how you can make your cuddling experience better? being little spoon... yeah that's right, let your partner wrap their arms around you. Let yourself be vulnerable and accept your partner's love!";
        } else {
             answer = "OH one of those days. Where nothing went right, everything went to sh*t. YOU need a mom's hug. Go to your parents house, open the door and ask your mom for the biggest hug you've ever received. She'll ask whats wrong, but just place your head on her heart and enjoy this moment.";
        }
        return answer
    }
}


export default utils;