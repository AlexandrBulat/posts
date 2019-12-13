
export enum Constants {
    GOOGLE_WEB_CLIENT_ID = "958522393832-vifvl2sqnseblqcftnlim1b3olimg5gi.apps.googleusercontent.com",
    GOOGLE_SCOPES = "https://www.googleapis.com/auth/drive.readonly",
    GOOGLE_SCRET = "fod1hwTVdoGkrtsW2EZeZ396",
    GOOGLE = "Google",
    TWITTER = "Twitter",
    TWITTER_APE_KEY = "3BAruQIaQPJx7HBU9kwQZCF6k",
    TWITTER_SECRET = "BLyLwCDogPQXu5buvg80qxxUDoBPb9kqZJWYobCCyZUVHrsbPF",
    FACEBOOK = "Facebook",
    ON_GOING = 'ongoing',
    SET = 'set',
    SQUARE_APP_ID = 'sandbox-sq0idp-MB88YHyvpQMA-7N_nbGdHw',
    MERCHANDISE = 'merchandise',
    PASS = 'pass',
    SERVICE_SET = 'service-set',
    ACTIVE = 'active',
    IN_ACTIVE = 'inactive',
    BUGSNAG_API_KEY = '4897f492998c6dcdbc4009cca49ce659',
    CATEGORY_ACE_TRANSFORM = 'ace-transform',
    CATEGORY_TEEN_ACE = 'teenace',
    ACE_EMAIL = 'info@ace-lifestyle.com',
    DETAILS = 'Details',
    TEEN = 'teen',
    NORMAL = 'normal',
    THREE_DAYS = 72,
    LOCATION_TO_BE_CONFIRMED = "Location to be confirmed after booking",
    ERROR_USER_NOT_EXISTS = "This user doesn't exist",
    ERROR_FULLY_BOOKED = "This class is fully booked",
    ERROR_NETWORK = "Please check your network",
    ERROR_CLASS_CANCELLED = "This class has been cancelled",
    ERROR_EXPIRED_PASS = 'Your pass is expired',
    ERROR_EXPIRED_CANCELLED = 'You can cancel a class up to 48h',
    ERROR_OPERATION_FAILED = "Operation failed! please try again",
    TIME_ZONE_EU_LONDON = "Europe/London",
    ADULT_TEEN_MESSAGE = "Adults can't attend TEENace. Please create a new account for your child.",
    ADULT_MESSAGE = "You have to be 18 years old to attend this class. Check our TEENace classes instead.",
    BOOK_SUCCESS_CLASS = 'Congratulations, you have successfully booked for this class. If you change your mind, you can cancel this class up to 48 hours before.',
    BOOK_SUCCESS_TEEN = 'Congratulations, you have successfully booked for this class. You will be sent an email with further infomation.'

}

export enum PaymentMethod {
    CC = "cc",
    PASS = "pass",
    CASH = "cash"
}

export enum TrainerDescription {
    SCHUCHMAN = 'I am passionate about all thing’s health and fitness. I love to lift heavy weights, swing kettlebells and am supremely competitive. I am passionate about helping my clients reach their goals whether its a weight loss goal or a strength goal. I am qualified to work with teenagers and founded TEENace our teen girls only bootcamp where were all about a positive body image and teaching them skills and techniques that they’ll be able use for life.',
    WILKER = 'I love our moto fit strong healthy and that is what I’m all about! Love to eat well, lift weight and run with my children!',
    LEORA = 'I am an experienced personal trainer who tailors my sessions to individual client needs. I will help you reach your goals, whether that is weight loss, gaining strength, staying strong through or post pregnancy or recovering from an injury.',
    AVITAL = 'I am a young, energetic and an enthusiastic trainer dedicated to motivating my clients. My mantra is you can slow down but you can’t stop. Ever. Health and well-being should be at the forefront of your everyday life, so it’s important to keep the physical activities fun effective, and always have a good playlist booming!',
    Fioretti = 'I am the newest addition to the aceTEAM and yes, you guessed it, I’m Italian so I teach all my classes using hand gestures only! Ok, you guessed this too, I am funny and I like to joke sometimes! Earlier this year I’ve qualified as a fitness instructor and personal trainer and I am now studying to become a nutritionist. Other than Italian hand gestures, I enjoy teaching (and training) using body weight and kettlebells.'
}

export enum ApiError {
    ERROR_NETWORK = "auth/unknown",
    TIME_OUT_ERROR = "TimeoutError",
    USER_NOT_EXISTS = "auth/user-not-found",
    USER_ALREDY_EXITS = "auth/email-already-in-use",
    FULLY_BOOKED = 104,
    CANCELED = 110,
    CLASS_EXPIRED = 301,
    CLASS_CANCEL_DENIED = 302,
    ERROR_UNKNOW = 0
}

export enum DisplayType {
    SUMMARY = "summary",
    SHORT = "short",
}

export enum MethodPackage {
    CC = "cc",
    PASS = "pass",
}