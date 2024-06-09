const time = 900000;

const judete = [
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ab_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ar_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ag_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bc_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bh_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bn_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bt_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_br_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bv_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_bz_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cs_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ct_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_cv_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_db_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_dj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_gl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_gr_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_gj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_hr_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_hd_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_il_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_is_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_if_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_mm_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_mh_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ms_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_nt_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ot_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_ph_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sj_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sm_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s1_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s2_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s3_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s4_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s5_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_s6_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sb_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_sv_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_tr_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_tm_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_tl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_vl_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_vs_prov.json',
  'https://prezenta.roaep.ro/europarlamentare09062024/data/json/sicpv/pv/pv_vn_prov.json',
];

let total = [];
let count = 0;

const getData = (url) => {
  return new Promise((resolve, reject) => {
    let whatever = url.split('/');
    let jd = whatever.slice(-1)[0];
    let bla = jd.split('_');

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let total_votes = 0;
        const table = data.stages.PROV?.scopes?.PRCNCT?.categories?.EUP?.table;

        if (table) {
          Object.keys(table).forEach((item) => {
            let a = table[item].votes.filter((tab) => tab.candidate == 'ȘTEFĂNUȚĂ NICOLAE-BOGDĂNEL');
            total_votes += parseInt(a[0].votes, 10);
          });
        }

        console.log(`total_votes ${bla[1]} = ${total_votes}`);

        total.push(total_votes);
        count++;
        if (count == judete.length) {
          let total_voturi = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
          console.log('TOTAL VOTURI = ', total_voturi);
        }
      });
  });
};


judete.forEach((item) => {
  getData(item);
});
