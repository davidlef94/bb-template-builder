/*
  default tokens here and whether or not they are force parsed.
*/
const defaultTokens = {
    jobtitle: {
        token: "%jobtitle%",
        isForceParse: false,
    },
    jobtype: {
        token: "%jobtype%",
        isForceParse: false,
    },
    skills: {
        token: "%skills%",
        isForceParse: true,
    },
    startdate: {
        token: "%startdate%",
        isForceParse: true,
    },
    industry: {
        token: "%industry%",
        isForceParse: false,
    },
    language: {
        token: "%language%",
        isForceParse: true,
    },
    experience: {
        token: "%experience%",
        isForceParse: true,
    },
    salary_from: {
        token: "%salary_from%",
        isForceParse: true,
    },
    salary_to: {
        token: "%salary_to%",
        isForceParse: true,
    },
    salary_per: {
        token: "%salary_per%",
        isForceParse: true,
    },
    salary_cur: {
        token: "%salary_cur%",
        isForceParse: true,
    },
    salary_cur_iso: {
        token: "%salary_cur_iso%",
        isForceParse: true,
    },
    salary_benefits: {
        token: "%salary_benefits%",
        isForceParse: true,
    },
    salary_negotiable: {
        token: "%salary_negotiable%",
        isForceParse: true,
    },
    company_nicename: {
        token: "%company_nicename%",
        isForceParse: true,
    },
    contacturl: {
        token: "%contacturl%",
        isForceParse: true,
    },
    unique_time_txt_jobref: {
        token: "%unique_time_txt_jobref%",
        isForceParse: true,
    },
    duration: {
        token: "%duration%",
        isForceParse: true,
    },
    build_description: {
        token: "%build_description%",
        isForceParse: true,
    },
    location_city: {
        token: "%location_city%",
        isForceParse: true,
    },
    location_state: {
        token: "%location_state%",
        isForceParse: true,
    },
    location_longitude: {
        token: "%location_longitude%",
        isForceParse: true,
    },
    location_latitude: {
        token: "%location_latitude%",
        isForceParse: true,
    },
    location_country: {
        token: "%location_country%",
        isForceParse: true,
    },
    location_country_iso: {
        token: "%location_country_iso%",
        isForceParse: true,
    },
    contactname: {
        token: "%contactname%",
        isForceParse: true,
    },
    rwcontactemail: {
        token: "%rwcontactemail%",
        isForceParse: false,
    },
    contacttelephone: {
        token: "%contacttelephone%",
        isForceParse: true,
    },
    postcode: {
        token: "%postcode%",
        isForceParse: true,
    },
    mandatory_postcode: {
        token: "%mandatory_postcode%",
        isForceParse: true,
    },
    contact_first_name: {
        token: "%contact_first_name%",
        isForceParse: true,
    },
    contact_last_name: {
        token: "%contact_last_name%",
        isForceParse: true,
    },
    location_address: {
        token: "%location_address%",
        isForceParse: true,
    },
    location_county: {
        token: "%location_county%",
        isForceParse: true,
    },
    videourl: {
        token: "%videourl%",
        isForceParse: true,
    },
    contactcompany: {
        token: "%contactcompany%",
        isForceParse: true,
    },
    contactaddress: {
        token: "%contactaddress%",
        isForceParse: true,
    },
    enddate: {
        token: "%enddate%",
        isForceParse: true,
    },
    requirements: {
        token: "%requirements%",
        isForceParse: true,
    },
    brief_description: {
        token: "%brief_description%",
        isForceParse: true,
    },
    additional: {
        token: "%additional%",
        isForceParse: true,
    },
    number_of_positions: {
        token: "%number_of_positions%",
        isForceParse: true,
    },
    allow_working_from_home: {
        token: "%allow_working_from_home%",
        isForceParse: true,
    },
    full_part: {
        token: "%full_part%",
        isForceParse: true,
    },
    location_text_region: {
        token: "%location_text_region%",
        isForceParse: true
    },
    add: {
        token: "add",
        isForceParse: false
    },
    mandatory_number_of_positions: {
        token: "%mandatory_number_of_positions%",
        isForceParse: true
    },
}

module.exports = {
    defaultTokens: defaultTokens
}