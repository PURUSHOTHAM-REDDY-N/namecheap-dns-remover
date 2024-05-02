import cron from 'node-cron';
import api from './namecheapConfig';

// this is for testing runs every minute
 cron.schedule('* * * * *', () => {
    console.log('Cron job running every minute');
    getAllHostRecordsForDomain()
  });
  // getAllHostRecordsForDomain()

  removeHostRecordsForDomain()

  // Logic to interact with Namecheap API and remove host records actually it sets +
async function removeHostRecordsForDomain() {
    const payload = { SLD:"purushotham",TLD:"net"};
    const { data } = await api.call("namecheap.domains.dns.setHosts", payload);
    console.log(data)

  }

  // this is for testing which gives all the records associated with the domain
  async function getAllHostRecordsForDomain() {
    const payload = { SLD:"purushotham",TLD:"net"};
    const {data: {DomainDNSGetHostsResult: {host}}} = await api.call("namecheap.domains.dns.getHosts", payload);

    console.log(((host[0]['$'])))
    // console.log(data)

  }


  // At midnight EST every day (5am UTC)
cron.schedule('0 5 * * *', () => {
    removeHostRecordsForDomain();
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  // At 6am EST every day (11am UTC)
  cron.schedule('0 11 * * *', () => {
    removeHostRecordsForDomain();
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  // At noon EST every day (5pm UTC)
  cron.schedule('0 17 * * *', () => {
    removeHostRecordsForDomain();
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });
  
  // At 6pm EST every day (11pm UTC)
  cron.schedule('0 23 * * *', () => {
    removeHostRecordsForDomain();
  }, {
    scheduled: true,
    timezone: "America/New_York"
  });