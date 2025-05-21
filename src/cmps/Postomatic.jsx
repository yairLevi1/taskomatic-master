export function Postomatic({t}) {
 return (
    <section className="postomatic">

        <h1>{t.postomaticH1}</h1>
        <h2>{t.postomaticH2}</h2>

        <p>{t.postomaticP1}</p>
        <p>{t.postomaticP2}</p>
        <p>{t.postomaticP3}</p>
        <p>{t.postomaticP4}</p>
        <p>{t.postomaticP5}</p>

        <video
            controls             // מציג פקדי פעלה (Play/Pause וכו')
            loop                 // אם תרצי חזרה אוטומטית
            muted                // להתחלה מ-muted (לדפדפנים גדולים דורשים זאת לאוטופליי)
            src="https://res.cloudinary.com/dv2brrhll/video/upload/v1747729630/FDownloader.Net_AQNqB9zTKmP9dtWOFpFyJJFcmrA2Tu_5bEcYo-6_RQEp6a3uuZk6tDS99Ixi1L8Z00Bon9tRJmwtl-s4r7zARA3w_720p__HD_xwlf9x.mp4"
        >
            הדפדפן שלך לא תומך בתג הווידאו.
        </video>

    </section>
 )
}