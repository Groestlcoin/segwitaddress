var isTestNet = getParamValue('testnet') == 'true';

function getParamValue(param) {
    return decodeURIComponent((new RegExp('[?|&]' + param + '=([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function currentNetwork() {
    return isTestNet ? bitcoin.networks.testnet : bitcoin.networks.bitcoin;
}

function headerHtml() {
    return '<h1>Groestlcoin SegWit Paper Wallet' + (isTestNet ? '<span style="color:red;"> (TestNet)</span>' : '') + '</h1>';
}

function headerHtml_bech32() {
    return '<h1>Groestlcoin Bech32 Paper Wallet' + (isTestNet ? '<span style="color:red;"> (TestNet)</span>' : '') + '</h1>';
}

function apiDomain() {
    return !isTestNet ? 'https://chainz.cryptoid.info/grs/api.dws?key=d47da926b82e' : 'https://chainz.cryptoid.info/grs-test/api.dws?key=d47da926b82e';
}

function apiDomain2() {
    return !isTestNet ? 'https://groestlsight.groestlcoin.org' : 'https://groestlsight-test.groestlcoin.org';
}

function explorerDomain() {
    return !isTestNet ? 'https://chainz.cryptoid.info/grs/' : 'https://chainz.cryptoid.info/grs-test/';
}