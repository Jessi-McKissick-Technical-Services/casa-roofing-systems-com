import footer from "../../JSON_data/footer.json";

function Footer(){
    return(
        <footer id="footer"> 
            <div id="contact_tape">
                {/* TODO: Fill in the placeholders below */}
                <p id="phone_number">{footer.contact_phone}</p>
                <p id="email">{footer.contact_email}</p>
                <p id="Address">{footer.address}</p>
            </div>
            <div id="copyright_license">
                {/* TODO: change TBD below */}
                <p>{footer.copyright_notice}</p>
                <p>License number: <b>{footer.license_info}</b></p>
            </div>
        </footer>
    )
}

export default Footer;