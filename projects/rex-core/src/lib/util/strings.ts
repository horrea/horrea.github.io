const PONCTUATINS: Set<string> = new Set(['\u0021', '\u0022', '\u0023', '\u0025', '\u0026', '\u0027', '\u002A', '\u002C', '\u002E', '\u002F', '\u003A', '\u003B', '\u003F', '\u0040', '\u005C', '\u00A1', '\u00A7', '\u00B6', '\u00B7', '\u00BF', '\u037E', '\u0387', '\u055A', '\u055B', '\u055C', '\u055D', '\u055E', '\u055F', '\u0589', '\u05C0', '\u05C3', '\u05C6', '\u05F3', '\u05F4', '\u0609', '\u060A', '\u060C', '\u060D', '\u061B', '\u061D', '\u061E', '\u061F', '\u066A', '\u066B', '\u066C', '\u066D', '\u06D4', '\u0700', '\u0701', '\u0702', '\u0703', '\u0704', '\u0705', '\u0706', '\u0707', '\u0708', '\u0709', '\u070A', '\u070B', '\u070C', '\u070D', '\u07F7', '\u07F8', '\u07F9', '\u0830', '\u0831', '\u0832', '\u0833', '\u0834', '\u0835', '\u0836', '\u0837', '\u0838', '\u0839', '\u083A', '\u083B', '\u083C', '\u083D', '\u083E', '\u085E', '\u0964', '\u0965', '\u0970', '\u09FD', '\u0A76', '\u0AF0', '\u0C77', '\u0C84', '\u0DF4', '\u0E4F', '\u0E5A', '\u0E5B', '\u0F04', '\u0F05', '\u0F06', '\u0F07', '\u0F08', '\u0F09', '\u0F0A', '\u0F0B', '\u0F0C', '\u0F0D', '\u0F0E', '\u0F0F', '\u0F10', '\u0F11', '\u0F12', '\u0F14', '\u0F85', '\u0FD0', '\u0FD1', '\u0FD2', '\u0FD3', '\u0FD4', '\u0FD9', '\u0FDA', '\u104A', '\u104B', '\u104C', '\u104D', '\u104E', '\u104F', '\u10FB', '\u1360', '\u1361', '\u1362', '\u1363', '\u1364', '\u1365', '\u1366', '\u1367', '\u1368', '\u166E', '\u16EB', '\u16EC', '\u16ED', '\u1735', '\u1736', '\u17D4', '\u17D5', '\u17D6', '\u17D8', '\u17D9', '\u17DA', '\u1800', '\u1801', '\u1802', '\u1803', '\u1804', '\u1805', '\u1807', '\u1808', '\u1809', '\u180A', '\u1944', '\u1945', '\u1A1E', '\u1A1F', '\u1AA0', '\u1AA1', '\u1AA2', '\u1AA3', '\u1AA4', '\u1AA5', '\u1AA6', '\u1AA8', '\u1AA9', '\u1AAA', '\u1AAB', '\u1AAC', '\u1AAD', '\u1B5A', '\u1B5B', '\u1B5C', '\u1B5D', '\u1B5E', '\u1B5F', '\u1B60', '\u1B7D', '\u1B7E', '\u1BFC', '\u1BFD', '\u1BFE', '\u1BFF', '\u1C3B', '\u1C3C', '\u1C3D', '\u1C3E', '\u1C3F', '\u1C7E', '\u1C7F', '\u1CC0', '\u1CC1', '\u1CC2', '\u1CC3', '\u1CC4', '\u1CC5', '\u1CC6', '\u1CC7', '\u1CD3', '\u2016', '\u2017', '\u2020', '\u2021', '\u2022', '\u2023', '\u2024', '\u2025', '\u2026', '\u2027', '\u2030', '\u2031', '\u2032', '\u2033', '\u2034', '\u2035', '\u2036', '\u2037', '\u2038', '\u203B', '\u203C', '\u203D', '\u203E', '\u2041', '\u2042', '\u2043', '\u2047', '\u2048', '\u2049', '\u204A', '\u204B', '\u204C', '\u204D', '\u204E', '\u204F', '\u2050', '\u2051', '\u2053', '\u2055', '\u2056', '\u2057', '\u2058', '\u2059', '\u205A', '\u205B', '\u205C', '\u205D', '\u205E', '\u2CF9', '\u2CFA', '\u2CFB', '\u2CFC', '\u2CFE', '\u2CFF', '\u2D70', '\u2E00', '\u2E01', '\u2E06', '\u2E07', '\u2E08', '\u2E0B', '\u2E0E', '\u2E0F', '\u2E10', '\u2E11', '\u2E12', '\u2E13', '\u2E14', '\u2E15', '\u2E16', '\u2E18', '\u2E19', '\u2E1B', '\u2E1E', '\u2E1F', '\u2E2A', '\u2E2B', '\u2E2C', '\u2E2D', '\u2E2E', '\u2E30', '\u2E31', '\u2E32', '\u2E33', '\u2E34', '\u2E35', '\u2E36', '\u2E37', '\u2E38', '\u2E39', '\u2E3C', '\u2E3D', '\u2E3E', '\u2E3F', '\u2E41', '\u2E43', '\u2E44', '\u2E45', '\u2E46', '\u2E47', '\u2E48', '\u2E49', '\u2E4A', '\u2E4B', '\u2E4C', '\u2E4D', '\u2E4E', '\u2E4F', '\u2E52', '\u2E53', '\u2E54', '\u3001', '\u3002', '\u3003', '\u303D', '\u30FB', '\uA4FE', '\uA4FF', '\uA60D', '\uA60E', '\uA60F', '\uA673', '\uA67E', '\uA6F2', '\uA6F3', '\uA6F4', '\uA6F5', '\uA6F6', '\uA6F7', '\uA874', '\uA875', '\uA876', '\uA877', '\uA8CE', '\uA8CF', '\uA8F8', '\uA8F9', '\uA8FA', '\uA8FC', '\uA92E', '\uA92F', '\uA95F', '\uA9C1', '\uA9C2', '\uA9C3', '\uA9C4', '\uA9C5', '\uA9C6', '\uA9C7', '\uA9C8', '\uA9C9', '\uA9CA', '\uA9CB', '\uA9CC', '\uA9CD', '\uA9DE', '\uA9DF', '\uAA5C', '\uAA5D', '\uAA5E', '\uAA5F', '\uAADE', '\uAADF', '\uAAF0', '\uAAF1', '\uABEB', '\uFE10', '\uFE11', '\uFE12', '\uFE13', '\uFE14', '\uFE15', '\uFE16', '\uFE19', '\uFE30', '\uFE45', '\uFE46', '\uFE49', '\uFE4A', '\uFE4B', '\uFE4C', '\uFE50', '\uFE51', '\uFE52', '\uFE54', '\uFE55', '\uFE56', '\uFE57', '\uFE5F', '\uFE60', '\uFE61', '\uFE68', '\uFE6A', '\uFE6B', '\uFF01', '\uFF02', '\uFF03', '\uFF05', '\uFF06', '\uFF07', '\uFF0A', '\uFF0C', '\uFF0E', '\uFF0F', '\uFF1A', '\uFF1B', '\uFF1F', '\uFF20', '\uFF3C', '\uFF61', '\uFF64', '\uFF65', '\u10100', '\u10101', '\u10102', '\u1039F', '\u103D0', '\u1056F', '\u10857', '\u1091F', '\u1093F', '\u10A50', '\u10A51', '\u10A52', '\u10A53', '\u10A54', '\u10A55', '\u10A56', '\u10A57', '\u10A58', '\u10A7F', '\u10AF0', '\u10AF1', '\u10AF2', '\u10AF3', '\u10AF4', '\u10AF5', '\u10AF6', '\u10B39', '\u10B3A', '\u10B3B', '\u10B3C', '\u10B3D', '\u10B3E', '\u10B3F', '\u10B99', '\u10B9A', '\u10B9B', '\u10B9C', '\u10F55', '\u10F56', '\u10F57', '\u10F58', '\u10F59', '\u10F86', '\u10F87', '\u10F88', '\u10F89', '\u11047', '\u11048', '\u11049', '\u1104A', '\u1104B', '\u1104C', '\u1104D', '\u110BB', '\u110BC', '\u110BE', '\u110BF', '\u110C0', '\u110C1', '\u11140', '\u11141', '\u11142', '\u11143', '\u11174', '\u11175', '\u111C5', '\u111C6', '\u111C7', '\u111C8', '\u111CD', '\u111DB', '\u111DD', '\u111DE', '\u111DF', '\u11238', '\u11239', '\u1123A', '\u1123B', '\u1123C', '\u1123D', '\u112A9', '\u1144B', '\u1144C', '\u1144D', '\u1144E', '\u1144F', '\u1145A', '\u1145B', '\u1145D', '\u114C6', '\u115C1', '\u115C2', '\u115C3', '\u115C4', '\u115C5', '\u115C6', '\u115C7', '\u115C8', '\u115C9', '\u115CA', '\u115CB', '\u115CC', '\u115CD', '\u115CE', '\u115CF', '\u115D0', '\u115D1', '\u115D2', '\u115D3', '\u115D4', '\u115D5', '\u115D6', '\u115D7', '\u11641', '\u11642', '\u11643', '\u11660', '\u11661', '\u11662', '\u11663', '\u11664', '\u11665', '\u11666', '\u11667', '\u11668', '\u11669', '\u1166A', '\u1166B', '\u1166C', '\u116B9', '\u1173C', '\u1173D', '\u1173E', '\u1183B', '\u11944', '\u11945', '\u11946', '\u119E2', '\u11A3F', '\u11A40', '\u11A41', '\u11A42', '\u11A43', '\u11A44', '\u11A45', '\u11A46', '\u11A9A', '\u11A9B', '\u11A9C', '\u11A9E', '\u11A9F', '\u11AA0', '\u11AA1', '\u11AA2', '\u11B00', '\u11B01', '\u11B02', '\u11B03', '\u11B04', '\u11B05', '\u11B06', '\u11B07', '\u11B08', '\u11B09', '\u11C41', '\u11C42', '\u11C43', '\u11C44', '\u11C45', '\u11C70', '\u11C71', '\u11EF7', '\u11EF8', '\u11F43', '\u11F44', '\u11F45', '\u11F46', '\u11F47', '\u11F48', '\u11F49', '\u11F4A', '\u11F4B', '\u11F4C', '\u11F4D', '\u11F4E', '\u11F4F', '\u11FFF', '\u12470', '\u12471', '\u12472', '\u12473', '\u12474', '\u12FF1', '\u12FF2', '\u16A6E', '\u16A6F', '\u16AF5', '\u16B37', '\u16B38', '\u16B39', '\u16B3A', '\u16B3B', '\u16B44', '\u16E97', '\u16E98', '\u16E99', '\u16E9A', '\u16FE2', '\u1BC9F', '\u1DA87', '\u1DA88', '\u1DA89', '\u1DA8A', '\u1DA8B', '\u1E95E', '\u1E95F']);
const SPACES: Set<string> = new Set([
    '\u0020',
    '\u00A0',
    '\u1680',
    '\u180E',
    '\u2000',
    '\u2001',
    '\u2002',
    '\u2003',
    '\u2004',
    '\u2005',
    '\u2006',
    '\u2007',
    '\u2008',
    '\u2009',
    '\u200A',
    '\u200B',
    '\u202F',
    '\u205F',
    '\u3000',
    '\uFEFF']);

const DiacriticsToBaseMap: Array<{ base: string, letters: string }> = [
    { 'base': 'A', 'letters': '\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F' },
    { 'base': 'AA', 'letters': '\uA732' },
    { 'base': 'AE', 'letters': '\u00C6\u01FC\u01E2' },
    { 'base': 'AO', 'letters': '\uA734' },
    { 'base': 'AU', 'letters': '\uA736' },
    { 'base': 'AV', 'letters': '\uA738\uA73A' },
    { 'base': 'AY', 'letters': '\uA73C' },
    { 'base': 'B', 'letters': '\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181' },
    { 'base': 'C', 'letters': '\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E' },
    { 'base': 'D', 'letters': '\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0' },
    { 'base': 'DZ', 'letters': '\u01F1\u01C4' },
    { 'base': 'Dz', 'letters': '\u01F2\u01C5' },
    { 'base': 'E', 'letters': '\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E' },
    { 'base': 'F', 'letters': '\u0046\u24BB\uFF26\u1E1E\u0191\uA77B' },
    { 'base': 'G', 'letters': '\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E' },
    { 'base': 'H', 'letters': '\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D' },
    { 'base': 'I', 'letters': '\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197' },
    { 'base': 'J', 'letters': '\u004A\u24BF\uFF2A\u0134\u0248' },
    { 'base': 'K', 'letters': '\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2' },
    { 'base': 'L', 'letters': '\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780' },
    { 'base': 'LJ', 'letters': '\u01C7' },
    { 'base': 'Lj', 'letters': '\u01C8' },
    { 'base': 'M', 'letters': '\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C' },
    { 'base': 'N', 'letters': '\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4' },
    { 'base': 'NJ', 'letters': '\u01CA' },
    { 'base': 'Nj', 'letters': '\u01CB' },
    { 'base': 'O', 'letters': '\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C' },
    { 'base': 'OI', 'letters': '\u01A2' },
    { 'base': 'OO', 'letters': '\uA74E' },
    { 'base': 'OU', 'letters': '\u0222' },
    { 'base': 'OE', 'letters': '\u008C\u0152' },
    { 'base': 'oe', 'letters': '\u009C\u0153' },
    { 'base': 'P', 'letters': '\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754' },
    { 'base': 'Q', 'letters': '\u0051\u24C6\uFF31\uA756\uA758\u024A' },
    { 'base': 'R', 'letters': '\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782' },
    { 'base': 'S', 'letters': '\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784' },
    { 'base': 'T', 'letters': '\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786' },
    { 'base': 'TZ', 'letters': '\uA728' },
    { 'base': 'U', 'letters': '\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244' },
    { 'base': 'V', 'letters': '\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245' },
    { 'base': 'VY', 'letters': '\uA760' },
    { 'base': 'W', 'letters': '\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72' },
    { 'base': 'X', 'letters': '\u0058\u24CD\uFF38\u1E8A\u1E8C' },
    { 'base': 'Y', 'letters': '\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE' },
    { 'base': 'Z', 'letters': '\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762' },
    { 'base': 'a', 'letters': '\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250' },
    { 'base': 'aa', 'letters': '\uA733' },
    { 'base': 'ae', 'letters': '\u00E6\u01FD\u01E3' },
    { 'base': 'ao', 'letters': '\uA735' },
    { 'base': 'au', 'letters': '\uA737' },
    { 'base': 'av', 'letters': '\uA739\uA73B' },
    { 'base': 'ay', 'letters': '\uA73D' },
    { 'base': 'b', 'letters': '\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253' },
    { 'base': 'c', 'letters': '\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184' },
    { 'base': 'd', 'letters': '\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A' },
    { 'base': 'dz', 'letters': '\u01F3\u01C6' },
    { 'base': 'e', 'letters': '\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD' },
    { 'base': 'f', 'letters': '\u0066\u24D5\uFF46\u1E1F\u0192\uA77C' },
    { 'base': 'g', 'letters': '\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F' },
    { 'base': 'h', 'letters': '\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265' },
    { 'base': 'hv', 'letters': '\u0195' },
    { 'base': 'i', 'letters': '\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131' },
    { 'base': 'j', 'letters': '\u006A\u24D9\uFF4A\u0135\u01F0\u0249' },
    { 'base': 'k', 'letters': '\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3' },
    { 'base': 'l', 'letters': '\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747' },
    { 'base': 'lj', 'letters': '\u01C9' },
    { 'base': 'm', 'letters': '\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F' },
    { 'base': 'n', 'letters': '\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5' },
    { 'base': 'nj', 'letters': '\u01CC' },
    { 'base': 'o', 'letters': '\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275' },
    { 'base': 'oi', 'letters': '\u01A3' },
    { 'base': 'ou', 'letters': '\u0223' },
    { 'base': 'oo', 'letters': '\uA74F' },
    { 'base': 'p', 'letters': '\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755' },
    { 'base': 'q', 'letters': '\u0071\u24E0\uFF51\u024B\uA757\uA759' },
    { 'base': 'r', 'letters': '\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783' },
    { 'base': 's', 'letters': '\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B' },
    { 'base': 't', 'letters': '\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787' },
    { 'base': 'tz', 'letters': '\uA729' },
    { 'base': 'u', 'letters': '\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289' },
    { 'base': 'v', 'letters': '\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C' },
    { 'base': 'vy', 'letters': '\uA761' },
    { 'base': 'w', 'letters': '\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73' },
    { 'base': 'x', 'letters': '\u0078\u24E7\uFF58\u1E8B\u1E8D' },
    { 'base': 'y', 'letters': '\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF' },
    { 'base': 'z', 'letters': '\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763' }
];


export function padSpaces(pad: string): (text: string) => string {
    return (text) => {
        return (text || '').replace(' ', pad);
    }
}

export function prefix(prefix: string): (text: string) => string {
    const safePrefix = prefix || '';
    return (text) => {
        return text ? safePrefix + text : text;
    }
}


export function withDiacriticReplaced(): (val: string) => string {
    const DiacriticDictionary = new Map();
    DiacriticsToBaseMap.forEach(({ base, letters }) => {
        for (var j = 0; j < letters.length; j++) {
            DiacriticDictionary.set(letters[j], base);
        }
    });
    return (val: string) => {
        const normalizeVal = (val || '').normalize('NFC');
        return normalizeVal.replace(/[^\u0000-\u007E]/g, function (l) {
            return DiacriticDictionary.get(l) || l;
        });
    }
}

export function withPunctuationReplaced(pad: string): (val: string) => string {
    return (val: string) => {
        const normalizeVal = (val || '').normalize('NFC');
        let toReturn = '';
        for(var j = 0; j<normalizeVal.length; j++) {
            if (PONCTUATINS.has(normalizeVal[j])) {
                toReturn += pad;
            } else {
                toReturn += normalizeVal[j];
            }
        }
        return toReturn;
    }
}


export function withSpacesReplaced(pad: string): (val: string) => string {
    return (val: string) => {
        const normalizeVal = (val || '').normalize('NFC');
        let toReturn = '';
        for(var j = 0; j<normalizeVal.length; j++) {
            if (SPACES.has(normalizeVal[j])) {
                toReturn += pad;
            } else {
                toReturn += normalizeVal[j];
            }
        }
        return toReturn;
    }
}