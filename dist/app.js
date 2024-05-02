"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const namecheapConfig_1 = __importDefault(require("./namecheapConfig"));
// this is for testing runs every minute
node_cron_1.default.schedule('* * * * *', () => {
    console.log('Cron job running every minute');
    getAllHostRecordsForDomain();
});
// getAllHostRecordsForDomain()
removeHostRecordsForDomain();
// Logic to interact with Namecheap API and remove host records actually it sets +
async function removeHostRecordsForDomain() {
    const payload = { SLD: "purushotham", TLD: "net" };
    const { data } = await namecheapConfig_1.default.call("namecheap.domains.dns.setHosts", payload);
    console.log(data);
}
// this is for testing which gives all the records associated with the domain
async function getAllHostRecordsForDomain() {
    const payload = { SLD: "purushotham", TLD: "net" };
    const { data: { DomainDNSGetHostsResult: { host } } } = await namecheapConfig_1.default.call("namecheap.domains.dns.getHosts", payload);
    console.log(((host[0]['$'])));
    // console.log(data)
}
// At midnight EST every day (5am UTC)
node_cron_1.default.schedule('0 5 * * *', () => {
    removeHostRecordsForDomain();
}, {
    scheduled: true,
    timezone: "America/New_York"
});
// At 6am EST every day (11am UTC)
node_cron_1.default.schedule('0 11 * * *', () => {
    removeHostRecordsForDomain();
}, {
    scheduled: true,
    timezone: "America/New_York"
});
// At noon EST every day (5pm UTC)
node_cron_1.default.schedule('0 17 * * *', () => {
    removeHostRecordsForDomain();
}, {
    scheduled: true,
    timezone: "America/New_York"
});
// At 6pm EST every day (11pm UTC)
node_cron_1.default.schedule('0 23 * * *', () => {
    removeHostRecordsForDomain();
}, {
    scheduled: true,
    timezone: "America/New_York"
});
//# sourceMappingURL=app.js.map