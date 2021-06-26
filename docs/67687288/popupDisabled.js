/**
 * This purpose of this file is to display a message alerting the user
 * that popups have been blocked
 * 
 * SpectricSO
 * 
 */
if (!x || x.closed || typeof x.closed == 'undefined') {
    document.write("This demonstration requires popup permissions<br/><br/><a href='#' onclick='location.reload()'>I've enabled popups</a>");
}
