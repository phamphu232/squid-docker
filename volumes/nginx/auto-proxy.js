function FindProxyForURL(url, host) {

    /* Normalize the URL for pattern matching */
    url = url.toLowerCase();
    host = host.toLowerCase();

    /* Don't proxy local hostnames */
    if (isPlainHostName(host)) {
        return 'DIRECT';
    }

    if (
        [
            'aalm.backlog.jp',
            'dsms.shopping.dmkt-sp.jp',
        ].indexOf(host) > - 1
    ) {
        return [
            // 'SOCKS localhost:1081',
            'PROXY vpn.diyfactory.jp:3128',
            'DIRECT'
        ].join('; ');
    }

    return 'DIRECT';
}