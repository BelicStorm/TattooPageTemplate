import Link from "next/dist/client/link";
export default function Custom404() {
    return <div className="gateToNothingness">
        <div className="ForgottenRealm">
                <h1>404.</h1>
                <p>You have been lost in a kingdom forgotten by the hand of any god. Escape before it's too late. It is not a joke. In this place only eternal pain awaits you.</p>
                <div className="salvation">
                    <Link
                        href={{
                            pathname: "/"
                        }}
                        >
                        <a href="#">Return to the human realm</a>
                    </Link>
                    
                    <br/><span>Don't let them escape</span></div>
            </div>
    </div>
            
  }