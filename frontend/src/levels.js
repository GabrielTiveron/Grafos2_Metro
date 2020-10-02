const ARR_LENGTH = 31
const wt = Array.from(Array(ARR_LENGTH)).map(x=>Math.floor(Math.random()*101))
export const level ={
  levelSP: {
		nodes: [
			{'id': 'sp_jundiai', 'label': 'Jundiai', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_barra_funda', 'label': 'Barra Funda', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_se', 'label': 'Sé', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_bras', 'label': 'Brás', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_amador_bueno', 'label': 'Amador Bueno', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_osasco', 'label': 'Osasco', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_pres_altino', 'label': 'Pres. Altino', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_pinheiros', 'label': 'Pinheiros', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_morumbi', 'label': 'Morumbi', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_santo_amaro', 'label': 'Santo Amaro', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_grajau', 'label': 'Grajaú', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_paraiso', 'label': 'Paraíso', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_ana_rosa', 'label': 'Ana Rosa', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_paulista', 'label': 'Paulista', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_vila_madalena', 'label': 'Vila Madalena', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_butanta', 'label': 'Butantã', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_tamanduatei', 'label': 'Tamanduateí', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_rio_grande_serra', 'label': 'Rio Grande da Serra', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_santo_andre', 'label': 'Santo André', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_sao_mateus', 'label': 'São Mateus', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_capao_redondo', 'label': 'Capão Redondo', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_tucuruvi', 'label': 'Tucuruvi', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_vila_prudente', 'label': 'Vila Prudente', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_republica', 'label': 'República', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_estudantes', 'label': 'Estudantes', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
			{'id': 'sp_luz', 'label': 'Luz', 'color': {
				'background': 'rgba(79,192,206, 1)',
				'border': 'rgba(4,165,186, 1)'
			}},
		],
		edges:[
			{'from': 'sp_jundiai', 'to': 'sp_barra_funda', 'label': `${wt[9]}`},
			{'from': 'sp_barra_funda', 'to': 'sp_jundiai', 'label': `${wt[9]}`},
			{'from': 'sp_barra_funda', 'to': 'sp_luz', 'label': `${wt[30]}`},
			{'from': 'sp_luz', 'to': 'sp_barra_funda', 'label': `${wt[30]}`},
			{'from': 'sp_amador_bueno', 'to': 'sp_osasco', 'label': `${wt[0]}`},
			{'from': 'sp_osasco', 'to': 'sp_amador_bueno', 'label': `${wt[0]}`},
			{'from': 'sp_osasco', 'to': 'sp_pres_altino', 'label': `${wt[29]}`},
			{'from': 'sp_pres_altino', 'to': 'sp_osasco', 'label': `${wt[29]}`},
			{'from': 'sp_pres_altino', 'to': 'sp_barra_funda', 'label': `${wt[28]}`},
			{'from': 'sp_barra_funda', 'to': 'sp_pres_altino', 'label': `${wt[28]}`},
			{'from': 'sp_pres_altino', 'to': 'sp_pinheiros', 'label': `${wt[27]}`},
			{'from': 'sp_pinheiros', 'to': 'sp_pres_altino', 'label': `${wt[27]}`},
			{'from': 'sp_pinheiros', 'to': 'sp_morumbi', 'label': `${wt[26]}`},
			{'from': 'sp_morumbi', 'to': 'sp_pinheiros', 'label': `${wt[26]}`},
			{'from': 'sp_morumbi', 'to': 'sp_santo_amaro', 'label': `${wt[25]}`},
			{'from': 'sp_santo_amaro', 'to': 'sp_morumbi', 'label': `${wt[25]}`},
			{'from': 'sp_capao_redondo', 'to': 'sp_santo_amaro', 'label': `${wt[7]}`},
			{'from': 'sp_santo_amaro', 'to': 'sp_capao_redondo', 'label': `${wt[7]}`},
			{'from': 'sp_grajau', 'to': 'sp_santo_amaro', 'label': `${wt[1]}`},
			{'from': 'sp_santo_amaro', 'to': 'sp_grajau', 'label': `${wt[1]}`},
			{'from': 'sp_morumbi', 'to': 'sp_santo_andre', 'label': `${wt[24]}`},
			{'from': 'sp_santo_andre', 'to': 'sp_morumbi', 'label': `${wt[24]}`},
			{'from': 'sp_santo_andre', 'to': 'sp_sao_mateus', 'label': `${wt[8]}`},
			{'from': 'sp_sao_mateus', 'to': 'sp_santo_andre', 'label': `${wt[8]}`},
			{'from': 'sp_morumbi', 'to': 'sp_ana_rosa', 'label': `${wt[23]}`},
			{'from': 'sp_ana_rosa', 'to': 'sp_morumbi', 'label': `${wt[23]}`},
			{'from': 'sp_ana_rosa', 'to': 'sp_paraiso', 'label': `${wt[22]}`},
			{'from': 'sp_paraiso', 'to': 'sp_ana_rosa', 'label': `${wt[22]}`},
			{'from': 'sp_paraiso', 'to': 'sp_se', 'label': `${wt[21]}`},
			{'from': 'sp_se', 'to': 'sp_paraiso', 'label': `${wt[21]}`},
			{'from': 'sp_se', 'to': 'sp_luz', 'label': `${wt[20]}`},
			{'from': 'sp_luz', 'to': 'sp_se', 'label': `${wt[20]}`},
			{'from': 'sp_luz', 'to': 'sp_tucuruvi', 'label': `${wt[2]}`},
			{'from': 'sp_tucuruvi', 'to': 'sp_luz', 'label': `${wt[2]}`},
			{'from': 'sp_ana_rosa', 'to': 'sp_tamanduatei', 'label': `${wt[19]}`},
			{'from': 'sp_tamanduatei', 'to': 'sp_ana_rosa', 'label': `${wt[19]}`},
			{'from': 'sp_tamanduatei', 'to': 'sp_vila_prudente', 'label': `${wt[10]}`},
			{'from': 'sp_vila_prudente', 'to': 'sp_tamanduatei', 'label': `${wt[10]}`},
			{'from': 'sp_paraiso', 'to': 'sp_paulista', 'label': `${wt[18]}`},
			{'from': 'sp_paulista', 'to': 'sp_paraiso', 'label': `${wt[18]}`},
			{'from': 'sp_paulista', 'to': 'sp_vila_madalena', 'label': `${wt[3]}`},
			{'from': 'sp_vila_madalena', 'to': 'sp_paulista', 'label': `${wt[3]}`},
			{'from': 'sp_paulista', 'to': 'sp_republica', 'label': `${wt[17]}`},
			{'from': 'sp_republica', 'to': 'sp_paulista', 'label': `${wt[17]}`},
			{'from': 'sp_paulista', 'to': 'sp_pinheiros', 'label': `${wt[16]}`},
			{'from': 'sp_pinheiros', 'to': 'sp_paulista', 'label': `${wt[16]}`},
			{'from': 'sp_butanta', 'to': 'sp_pinheiros', 'label': `${wt[4]}`},
			{'from': 'sp_pinheiros', 'to': 'sp_butanta', 'label': `${wt[4]}`},
			{'from': 'sp_republica', 'to': 'sp_luz', 'label': `${wt[15]}`},
			{'from': 'sp_luz', 'to': 'sp_republica', 'label': `${wt[15]}`},
			{'from': 'sp_republica', 'to': 'sp_barra_funda', 'label': `${wt[14]}`},
			{'from': 'sp_barra_funda', 'to': 'sp_republica', 'label': `${wt[14]}`},
			{'from': 'sp_republica', 'to': 'sp_se', 'label': `${wt[13]}`},
			{'from': 'sp_se', 'to': 'sp_republica', 'label': `${wt[13]}`},
			{'from': 'sp_se', 'to': 'sp_bras', 'label': `${wt[12]}`},
			{'from': 'sp_bras', 'to': 'sp_se', 'label': `${wt[12]}`},
			{'from': 'sp_bras', 'to': 'sp_tamanduatei', 'label': `${wt[11]}`},
			{'from': 'sp_tamanduatei', 'to': 'sp_bras', 'label': `${wt[11]}`},
			{'from': 'sp_tamanduatei', 'to': 'sp_rio_grande_serra', 'label': `${wt[5]}`},
			{'from': 'sp_rio_grande_serra', 'to': 'sp_tamanduatei', 'label': `${wt[5]}`},
			{'from': 'sp_bras', 'to': 'sp_estudantes', 'label': `${wt[6]}`},
			{'from': 'sp_estudantes', 'to': 'sp_bras', 'label': `${wt[6]}`},
		]
  },

  levelLDN: {
		nodes: [
			{'id': 'sp_jundiai', 'label': 'Jundiai'},
			{'id': 'sp_barra_funda', 'label': 'Barra Funda'},
			{'id': 'sp_se', 'label': 'Sé'},
			{'id': 'sp_bras', 'label': 'Brás'},
			{'id': 'sp_amador_bueno', 'label': 'Amador Bueno'},
			{'id': 'sp_osasco', 'label': 'Osasco'},
			{'id': 'sp_pres_altino', 'label': 'Pres. Altino'},
			{'id': 'sp_pinheiros', 'label': 'Pinheiros'},
			{'id': 'sp_morumbi', 'label': 'Morumbi'},
			{'id': 'sp_santo_amaro', 'label': 'Santo Amaro'},
			{'id': 'sp_grajau', 'label': 'Grajaú'},
			{'id': 'sp_paraiso', 'label': 'Paraíso'},
			{'id': 'sp_ana_rosa', 'label': 'Ana Rosa'},
			{'id': 'sp_paulista', 'label': 'Paulista'},
			{'id': 'sp_vila_madalena', 'label': 'Vila Madalena'},
			{'id': 'sp_butanta', 'label': 'Butantã'},
			{'id': 'sp_tamanduatei', 'label': 'Tamanduateí'},
			{'id': 'sp_rio_grande_serra', 'label': 'Rio Grande da Serra'},
			{'id': 'sp_santo_andre', 'label': 'Santo André'},
			{'id': 'sp_sao_mateus', 'label': 'São Mateus'},
			{'id': 'sp_capao_redondo', 'label': 'Capão Redondo'},
			{'id': 'sp_tucuruvi', 'label': 'Tucuruvi'},
			{'id': 'sp_vila_prudente', 'label': 'Vila Prudente'},
			{'id': 'sp_republica', 'label': 'República'},
			{'id': 'sp_estudantes', 'label': 'Estudantes'},
			{'id': 'sp_luz', 'label': 'Luz'},
		],
		edges:[
			{'from': 'sp_jundiai', 'to': 'sp_barra_funda', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_barra_funda', 'to': 'sp_luz', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_amador_bueno', 'to': 'sp_osasco', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_osasco', 'to': 'sp_pres_altino', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_pres_altino', 'to': 'sp_barra_funda', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_osasco', 'to': 'sp_pres_altino', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_pres_altino', 'to': 'sp_pinheiros', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_pinheiros', 'to': 'sp_morumbi', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_morumbi', 'to': 'sp_santo_amaro', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_capao_redondo', 'to': 'sp_santo_amaro', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_grajau', 'to': 'teste2', 'sp_santo_amaro': Math.floor(Math.random()*101)},
			{'from': 'sp_morumbi', 'to': 'sp_santo_andre', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_santo_andre', 'to': 'sp_sao_mateus', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_morumbi', 'to': 'sp_ana_rosa', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_ana_rosa', 'to': 'sp_paraiso', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_paraiso', 'to': 'sp_se', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_se', 'to': 'sp_luz', 'sp_luz': Math.floor(Math.random()*101)},
			{'from': 'sp_luz', 'to': 'sp_tucuruvi', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_ana_rosa', 'to': 'sp_tamanduatei', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_tamanduatei', 'to': 'sp_vila_prudente', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_paraiso', 'to': 'sp_paulista', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_paulista', 'to': 'sp_vila_madalena', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_paulista', 'to': 'sp_republica', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_paulista', 'to': 'sp_pinheiros', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_butanta', 'to': 'sp_pinheiros', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_republica', 'to': 'sp_luz', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_republica', 'to': 'sp_barra_funda', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_republica', 'to': 'sp_se', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_se', 'to': 'sp_bras', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_bras', 'to': 'sp_tamanduatei', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_tamanduatei', 'to': 'sp_rio_grande_serra', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_bras', 'to': 'sp_estudantes', 'label': Math.floor(Math.random()*101)},
			{'from': 'sp_grajau', 'to': 'sp_santo_amaro', 'label': Math.floor(Math.random()*101)},
		]
  }
}
