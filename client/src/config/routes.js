export const routeConfig = {
    home : "/",
    login : "/login",
    register : "/register",
    gigs : "/gigs",
    myGigs : "/myGigs",
    orders : "/orders",
    messages :"/messages",
    message : (id) => `/message/:${id}`,
    gig : (id) => `/gig/:${id}`,
    add : "/add",
    pay : (id) => `/pay/${id}`,
    success : "/success"
}