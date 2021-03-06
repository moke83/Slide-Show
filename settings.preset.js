const PRESET_SETTINGS = {

dur: 10,
// 一枚毎の画像の表示時間。秒数を整数ないし小数で指定。

app_width: '100%',
app_height: '60%',
// 画像フレームの幅(app_width)と、高さ(app_height)。
// 表示される画像の大きさは、フレームの高さに基づいて自動で決定するため、
// app_height で指定した値が実質的な画像の表示サイズの基準になる。そのため、app_width は基本的には 100% のままで変更する必要はない。
// 値の単位は px, % などが使える。% で指定した場合、このスライドショーが属するドキュメントの大きさに対する割合として認識される。
// いずれの場合も、指定した値はシングルクォーテーション(')かダブルクォーテーション(")で必ず囲んでいる必要がある。
// OBS で使う際の推奨値としては、頻繁にスライドショーの位置を OBS 上で任意に動かす場合は、app_width: 100%, app_height: 100%、
// 概ね固定して使用する場合は、スライドショーを読み込んだ OBS のブラウザーソースのプロパティ内から「幅」、「高さ」を配信画面の解像度と同じピクセス数、
// 例えばフル HD 解像度で配信しているなら 幅:1920 高さ:1080 にした上で、 app_width: 100%, app_height: 40% などとし、
// 下記の設定値 position に、表示したい位置に合わせた任意の値（例えば左下なら position: 1 ）を指定する。

position: 3,
// スライドショーの表示位置を、画面を九分割して、1 を左下隅としたテンキーの位置に対応する整数値(1～9)で指定する。
// 1 より小さい値は 1 になり、9 より大きい値は 9 になる。

latest_term: 7,
// ファイル記述子内に画像の日付を示すプロパティ file_date が指定されている場合、
// その日付から現在日時までの日数が、このプロパティ latest_term の示す整数値に収まる場合、
// その画像のファイル記述子に自動で値を NEW にしたプロパティ file_noteを設定する。
// 要約すると、現在日時から latest_term 日前までの画像は自動で最新画像扱いされる。
// この自動最新判定機能を停止したい場合は、このプロパティを削除するか、値に false を指定する。
// またファイル記述子に file_note が設定されている場合は、その画像に対しては自動判定が行なわれない。
// 無効な値を指定した場合の既定値は 7（つまり一週間）。
// なお、file_date の書式は、以下の二重引用符に囲われた "YYYY MM DD" "YY MM DD" "'YY MM DD" の三つのいずれかひとつになる。
// Y,M,D はいずれも 0 から 9 の範囲を取る数字で、それぞれの文字の数は桁数を示す。さらに Y は年を、M は月を、D は日を示す。
// 例えば file_date: "2021 10 23" は、"2021年10月23日" と解釈される。
// 書式内の半角スペースと行頭、行末は数値以外の任意の数の文字列に置き換えできる。例えば file_date: "2021年10月23日" とそのまま指定できることもできるし、
// file_date: "2021-10-23"、file_date: "2021.10.23"、file_date: "2021ねん10がつ23にち" とすることもできる。
// これらはいずれも "2021年10月23日" に正規化される。
// 仮に任意の文字列を file_date に指定したい場合は、同プロパティに上記書式に当てはまらない文字列を指定するか、
// ファイル記述子内にプロパティ file_actual_date を指定し、画像の日付をそこに指定すれば、file_date に指定した文字列がそのまま表示される。
// file_actual_date を指定した場合は、file_date に書式に則った文字列を指定しても、その文字列は日付表現に正規化されない。

assets: [],
// 使用するアセット名。ここで指定したアセットは、すべての画像に対して適用される。
// 個別にアセットを割り当てる場合は、各ファイル毎に別個で指定することで、ここでの設定が上書きされる。

template: {},
// プロパティ template 内の値は、必ず JSON 互換でなければならない。
// 例えばプロパティの値に式や変数は使ってはならない。（逆に言えば template 以外のプロパティには実は式や変数が指定できる、しかし非推奨、非対応）
// 各 template に begin.promise.index, end.promise.index を設定している場合、
// 各要素の位置関係は絶対になり、任意に並び替える際は同プロパティの値を必ず変更しなければならない点に留意すること。

profileName: [ 'simple' ],
// 任意のプロファイル名を文字列か、任意の数の文字列のプロファイル名を配列に入れて指定する。
// 各プロファイル間の同名プロパティはより後方のプロファイルの同名プロパティに上書きされる。

file_title: '',
file_author: '',

cue: 0,
// 指定した整数に対応する files 内の画像から再生を開始する。
// たくさんの画像が指定された files 内の、後方のファイルの表示を、並び順を替えずに確認したい時に有用。
// 例えば files に三つの画像 'a', 'b', 'c' を指定した場合、通常は 'a' から再生されるが、
// cue に 1 を指定すると、'b' から再生される。
// cue に負の整数を指定すると、files を後ろから数えた対応する位置の画像から再生する。
// 例えば上記の例の場合、cue に -1 を指定すると、再生順は 'c', 'a', 'b', 'c' ... になる。
// 範囲外の値を指定するか整数以外の値を指定した場合、files の先頭か最後尾に丸められる。

files: [
"img/sample-0.png",
{ file_path: "img/sample-1.png", file_author: 'SAMPLE' },
{
	file_path: "img/sample-2.png",
	template: {
		
		default_author: { tag: 'div', text: 'This is an overwritten template. Never affect the other files using the original one though.' }
		
	}
},
{ file_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Thuringia_Eisenach_asv2020-07_img23_Wartburg_Castle.jpg/800px-Thuringia_Eisenach_asv2020-07_img23_Wartburg_Castle.jpg", file_author: "«© A.Savin, WikiCommons»" },
{
	file_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Blutenburg_gespiegelt.jpg/800px-Blutenburg_gespiegelt.jpg",
	file_author: 'Schloss Blutenburg in Obermenzing/München.',
	// A "template" property for the file descriptor is useful but it reduces readbility.
	// This property is refered from the "children" property of the "default" template,
	// and it will be replaced with the "wikimedia_author"
	file_author_template: '{wikimedia_author}',
},],
// 表示する画像のリスト。
// 角括弧 [] に囲まれた中に画像ファイルの相対パスか絶対パス、または URL を、シングルクォーテーション(')かダブルクォーテーション(")で囲んで指定する。
// 複数ある場合はコンマ(,)で区切って並べて指定する。このリストに並べた順で表示を行う。
// ファイルの情報を示すオブジェクト内にプロパティ exclusive を設定し、その値に真を示す値を指定すると、
// リスト内に他のファイルが存在していても、そのプロパティが設定されたファイルのみ表示される。
// 逆に言えばファイルリスト内にひとつでも exclusive を設定したファイルがあると、他のファイルは一切表示されない。
// また、exclusive はプロパティであるため、当然ファイルパスを文字列で直接している場合は設定できない。

resource: {
	audios: [
		{ id: 'btn07', src: '', delay: 0, offset: 0, duration: true, gain: 0.05, playbackRate: 2 }
	]
},
// audiosに指定した文字列ないしオブジェクト内のプロパティ src に指定したリソースを音声ファイルとして読み込む。
// audios は複数指定でき、その際は audios の値を配列にし、その中に読み込む音声ファイルを文字列ないしオブジェクトで列挙する。
// オブジェクトで指定した場合、音声ファイルの再生形式などのパラメーターを任意で指定できる。
// パラメーターは主に AudioNode 内の各種コンストラクター関数が受け付けるものに準じており、具体的には以下と同名のパラメーターがそのまま使える。
// https://developer.mozilla.org/en-US/docs/Web/API/GainNode/GainNode#parameters
// https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode#parameters
// ちなみに AudioBufferSourceNode のパラーメーターに相当する delay, offset, duration は、
// それぞれ再生開始時間、音声ファイルの再生開始位置、再生時間を示し、それらの値はすべて実数（ないし整数）で指定する。
// ただし、duration は実数として解釈できない値（例えば true など）を指定した場合、音声ファイルの元の再生時間で補完される。
asset: {
	sample: [ 'btn07', 'sample' ]
},
// 任意のアセット名に、アセットの構成物となるリソースの id を、再生ないし表示順に配列に列挙して指定する。



// 以下内部処理用

attribute: {
	guest: {
		'--dur-multiplier': 1.5,
		'--dur-add': 0
	},
	manga: {
		'--dur-multiplier': 1.5,
		'--dur-add': 0
	}
},
unit_dict: {
	'--dur-add': [ null, 's' ]
},

profile: {
	
	dev: {
		
		dur: 5,
		
		attr: { 'html': { 'class': 'dev' }, '#screen': { 'data-author': '[[file_author]]' } },
		
		app_height: '100%',
		position: 3,
		
		cue: -1
		
	},
	
	simple: {
		
		css: 'css/simple.css',
		
		cssvar: '{"target-raw-rect-height[0]":"{#h*}"}',
		
		resource: {
			audios: [
				{ id: 'sample', src: 'audios/sample.mp3', delay: 0, offset: 0, duration: true, gain: 1, playbackRate: 1 }
			]
		},
		// audiosに指定した文字列ないしオブジェクト内のプロパティ src に指定したリソースを音声ファイルとして読み込む。
		// audios は複数指定でき、その際は audios の値を配列にし、その中に読み込む音声ファイルを文字列ないしオブジェクトで列挙する。
		// オブジェクトで指定した場合、音声ファイルの再生形式などのパラメーターを任意で指定できる。
		// パラメーターは主に AudioNode 内の各種コンストラクター関数が受け付けるものに準じており、具体的には以下と同名のパラメーターがそのまま使える。
		// https://developer.mozilla.org/en-US/docs/Web/API/GainNode/GainNode#parameters
		// https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode#parameters
		// ちなみに AudioBufferSourceNode のパラーメーターに相当する delay, offset, duration は、
		// それぞれ再生開始時間、音声ファイルの再生開始位置、再生時間を示し、それらの値はすべて実数（ないし整数）で指定する。
		// ただし、duration は実数として解釈できない値（例えば true など）を指定した場合、音声ファイルの元の再生時間で補完される。
		
		asset: {
			sample: [ 'sample' ]
		},
		
		assets: [ 'sample' ],
		
		template: {
			
			default: [
				
				{
					end: { timeout: true },
					attr: { 'class': 'viewport' },
					// [[]] refers to the file descriptor or configuration property corresponding to the included string.
					// The string following : will be used as a default value if there is no corresponding property.
					children: [ '[[file_author_template:{default_author}]]' ]
				}
				
			],
			default_author: { tag: 'div', attr: { 'class': 'author' }, text: '[[file_author]]' },
			wikimedia_author: {
				tag: 'div', attr: { 'class': 'author wikimedia' }, text: '[[file_author]]',
				children: '{wikimedia_icon}'
			},
			wikimedia_icon: { attr: { 'class': 'wikimedia_icon expat' } }
			
		}
		
	},
	
	simplex: {
		
		file_template: '{default_simplex}',
		
		default_begin_constrain: null,
		
		template: {
			
			default_key: '{default_key_0}',
			default_key_0_reflection: [ '{default_reflection_in}', '{default_reflection_one}' ],

		}
		
	},
	
	default: {
		
		css: 'css/default.css',
		
		cssvar: '{"target-raw-rect-height[0]":"{#h*}"}',
		
		default_begin_constrain: { event: { animationstart: { target: '.attr-bg > .out', persistent: true, name: 'key' } } },
		
		template: {
			
			default_simple: [
				'{default_timeout}',
				'{default_notation}',
				'{file_meta}',
				{
					end: { event: { animationend: [ { target: true, count: 2, name: 'transition2' } ] } },
					attr: { 'class': 'viewport' },
					children: [
						{
							end: { event: { animationend: [ { target: true, count: 1, name: 'element-preset-anime' } ] } },
							attr: { 'class': 'scene 0', 'data-dur': 0.15 },
							style: {
								'--dur': 'var(--time)',
								'--from-x': '0%',
								'--from-y': '0%',
								'--from-w': '100%',
								'--from-h': '100%',
								'--from-r': '0deg',
								'--o-0': 0,
								'--o-1': 1,
								'--o-2': 1,
								'--o-3': 1,
								'--z-index': -1
							}
						},
						{
							end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
							attr: { 'class': 'reflection 0' },
							style: { '--ref-dur': '.8s', '--ref-delay': '0s' }
						},
						{
							end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
							attr: { 'class': 'reflection 1' },
							style: { '--ref-dur': '.4s', '--ref-delay': '0.375s' }
						}
					]
				}
			],
			
			default_heat: {
				end: true,
				style: {
					
					
				},
				children: '{default_intercept?default_content}'
			},
			default_alice: {
				end: true,
				style: {
					
					'--key-0-s': 3, '--key-0-s-to': 'var(--key-0-s)',
					'--key-0-x': 0.4, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0.4, '--key-0-y-to': 0.5,
					
					'--key-1-s': 5, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 0.45, '--key-1-x-to': 'var(--key-1-x)',
					'--key-1-y': 0.3, '--key-1-y-to': 0.22,
					
					'--key-2-delay-in': '0s',
					'--key-2-dur-in': 'calc(var(--key-0-dur-remaining) * .2)',
					'--key-2-delay-primary': '0s',
					'--key-2-dur-primary': 'calc(var(--key-2-dur-remaining) * .1)',
					'--key-2-delay-out': 'calc(var(--key-2-dur-remaining) * .9 - var(--key-2-dur-out))',
					'--key-2-dur-out': 'calc(var(--key-0-dur-remaining) * .05)',
					//'--key-2-delay-primary': '0s', '--key-2-dur-primary': '!0.1!s',
					//'--key-2-delay-out': 'calc(!0.9!s - ?0.05?s)', '--key-2-dur-out': '?0.05?s',
					'--key-2-s': 1, '--key-2-s-to': 'var(--key-2-s)',
					'--key-2-x': 0, '--key-2-x-to': 'var(--key-2-x)',
					'--key-2-y': 0, '--key-2-y-to': 'var(--key-2-y)',
					'--key-2-transform': 'translate(5%,0%)',
					'--key-2-transform-to': 'translate(0%,0%)',
					'--key-2-transform-out-to': 'translate(-4%,0%)',
					
				},
				children: '{default_intercept?default_content}'
			},
			default_notice_me: {
				end: true,
				attr: { 'class': 'hr-copy' },
				style: {
					
					'--copy-default-font-family': '"ステッキ"',
					'--copy-default-font-size': '4rem',
					'--copy-default-white-space': 'normal',
					'--copy-default-word-break': 'break-all',
					'--copy-0-t-x': '0%',
					'--copy-0-t-x-amount-in': '0%',
					'--copy-0-t-x-amount-primary': '0%',
					'--copy-0-t-x-amount-out': '0%',
					'--copy-0-t-y': '50%',
					'--copy-0-t-y-amount-in': '-50%',
					'--copy-0-t-y-amount-primary': '-5%',
					'--copy-0-t-y-amount-out': '-10%',
					'--copy-0-func-in': 'cubic-bezier(1,-1.11,0,2.38)',
					'--copy-0-t-s-in': '1.2',
					'--copy-0-t-s-in-to': '1',
					'--copy-0-t-r-primary': '-15deg',
					'--copy-1-t-x': '0%',
					'--copy-1-t-x-amount-in': '0%',
					'--copy-1-t-x-amount-primary': '0%',
					'--copy-1-t-x-amount-out': '0%',
					'--copy-1-t-y': '50%',
					'--copy-1-t-y-amount-in': '-50%',
					'--copy-1-t-y-amount-primary': '-5%',
					'--copy-1-t-y-amount-out': '-10%',
					'--copy-1-func-in': 'cubic-bezier(1,-1.11,0,2.38)',
					'--copy-1-t-s-in': '1.2',
					'--copy-1-t-s-in-to': '1',
					'--copy-1-t-r-primary': '-15deg',
					
					'--key-0-delay-in': '0s',
					'--key-0-dur-in': 'calc(var(--key-0-dur-remaining) * .1)',
					'--key-0-delay-primary': '0s',
					'--key-0-dur-primary': 'calc(var(--key-0-dur-remaining) * .1)',
					'--key-0-delay-out': 'calc(var(--key-0-dur-remaining) * .1)',
					'--key-0-dur-out': 'calc(var(--key-0-dur-remaining) * .05)',
					'--key-0-func': 'cubic-bezier(.69,4.71,.4,-2.43)',
					'--key-0-s': 6.5, '--key-0-s-to': 5.5,
					'--key-0-x': 0.45, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0.2, '--key-0-y-to': 'var(--key-0-y)',
					
					'--key-1-s': 3, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 1, '--key-1-x-to': 0.425,
					'--key-1-y': 0.45, '--key-1-y-to': 'var(--key-1-y)',
					
					'--key-2-delay-in': '0s',
					'--key-2-dur-in': 'calc(var(--key-0-dur-remaining) * .05)',
					'--key-2-delay-primary': '0s',
					'--key-2-dur-primary': 'calc(var(--key-0-dur-remaining) * .1)',
					'--key-2-delay-out': 'calc((var(--key-2-dur-remaining) - var(--key-2-delay-in)) - var(--key-2-dur-out))',
					'--key-2-dur-out': 'calc(var(--key-0-dur-remaining) * .05)',
					//'--key-2-delay-primary': '0s', '--key-2-dur-primary': '!0.1!s',
					//'--key-2-delay-out': 'calc(!0.9!s - ?0.05?s)', '--key-2-dur-out': '?0.05?s',
					'--key-2-s': 1, '--key-2-s-to': 'var(--key-2-s)',
					'--key-2-x': 0, '--key-2-x-to': 'var(--key-2-x)',
					'--key-2-y': 0, '--key-2-y-to': 'var(--key-2-y)',
					'--key-2-func': 'cubic-bezier(.69,4.71,.4,-2.43)',
					'--key-2-transform': 'scale(1.1)',
					'--key-2-transform-to': 'scale(1)',
					/*
					'--key-2-transform-in': 'translate(-10%,0%)',
					'--key-2-transform-in-to': 'translate(-0%,0%)',
					'--key-2-transform': 'translate(0%,0%)',
					'--key-2-transform-to': 'translate(5%,0%)',
					'--key-2-transform-out-to': 'translate(-4%,0%)',
					*/
				},
				children: '{default_intercept?default_content}'
			},
			default_summoner: {
				end: true,
				attr: { 'class': 'hr-copy' },
				style: {
					
					'--copy-default-font-size': '3rem',
					
					'--copy-default-white-space': 'normal',
					'--copy-default-word-break': 'break-all',
					
					'--copy-0-background': 'rgba(0,0,0,1)',
					'--copy-0-border': '.4rem solid rgba(255,255,255,1)',
					'--copy-0-border-radius': '1rem',
					'--copy-0-padding': '1rem',
					'--copy-0-font-family': '"ドットゴシック16"',
					'--copy-0-font-size': '1.75rem',
					'--copy-0-font-weight': 'bold',
					'--copy-0-t-x': '0%',
					'--copy-0-t-x-amount-in': '0%',
					'--copy-0-t-x-amount-primary': '0%',
					'--copy-0-t-x-amount-out': '0%',
					'--copy-0-t-y': '20%',
					'--copy-0-t-y-amount-in': '-20%',
					'--copy-0-t-y-amount-primary': '0%',
					'--copy-0-t-y-amount-out': '20%',
					'--copy-0-position': 'absolute',
					'--copy-0-top': '5%',
					'--copy-0-left': '0%',
					'--copy-0-width': '60%',
					
					'--key-0-s': 5, '--key-0-s-to': 'var(--key-0-s)',
					'--key-0-x': 0.11, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0.18, '--key-0-y-to': 0.27,
					
					'--copy-1-background': 'rgba(0,0,0,.5)',
					'--copy-1-border': '.4rem solid rgba(255,255,255,1)',
					'--copy-1-border-radius': '1rem',
					'--copy-1-padding': '1rem',
					'--copy-1-margin': '.5rem',
					'--copy-1-font-family': '"ドットゴシック16"',
					'--copy-1-font-size': '1.75rem',
					'--copy-1-font-weight': 'bold',
					'--copy-1-position': 'absolute',
					'--copy-1-top': '10%',
					'--copy-1-left': '0%',
					
					'--key-1-s': 5, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 0.48, '--key-1-x-to': 'var(--key-1-x)',
					'--key-1-y': 0.32, '--key-1-y-to': 0.23,
					
					'--key-2-delay-in': '0s',
					'--key-2-dur-in': 'calc(var(--key-0-dur-remaining) * .2)',
					'--key-2-delay-primary': '0s',
					'--key-2-dur-primary': 'calc(var(--key-2-dur-remaining) * .1)',
					'--key-2-delay-out': 'calc(var(--key-2-dur-remaining) * .9 - var(--key-2-dur-out))',
					'--key-2-dur-out': 'calc(var(--key-0-dur-remaining) * .05)',
					//'--key-2-delay-primary': '0s', '--key-2-dur-primary': '!0.1!s',
					//'--key-2-delay-out': 'calc(!0.9!s - ?0.05?s)', '--key-2-dur-out': '?0.05?s',
					'--key-2-s': 1, '--key-2-s-to': 'var(--key-2-s)',
					'--key-2-x': 0, '--key-2-x-to': 'var(--key-2-x)',
					'--key-2-y': 0, '--key-2-y-to': 'var(--key-2-y)',
					'--key-2-transform': 'translate(5%,0%)',
					'--key-2-transform-to': 'translate(0%,0%)',
					'--key-2-transform-out-to': 'translate(-4%,0%)',
					
				},
				children: '{default_intercept?default_content}'
			},
			default_vanilla: {
				end: true,
				style: {
					
					//'--from-x-0': '-120%',
					//'--from-y-0': '-70%',
					//'--to-y-0': '-100%',
					//'--from-w-0': '300%',
					//'--from-h-0': '300%',
					//
					//'--from-x-1': '-230%',
					//'--from-y-1': '-70%',
					//'--to-y-1': '-80%',
					//'--from-w-1': '500%',
					//'--from-h-1': '500%',
					'--copy-0-delay-in': 'calc(var(--key-0-dur-remaining) * .05)',
					'--copy-0-dur-in': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-0-delay-primary': '0s',
					'--copy-0-dur-primary': 'calc(var(--key-0-dur-remaining) * .05)',
					'--copy-0-delay-out': 'calc(var(--key-0-dur-remaining) * .2)',
					'--copy-0-dur-out': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-0-func-primary': 'linear',
					'--copy-0-iterate-primary': 'infinite',
					'--copy-0-dir-primary': 'alternate',
					'--copy-0-t-y': '0%',
					'--copy-0-t-y-amount-in': '0%',
					'--copy-0-t-y-amount-primary': '5%',
					'--copy-0-t-y-amount-out': '0%',

					'--copy-1-delay-in': 'calc(var(--key-0-dur-remaining) * .15)',
					'--copy-1-dur-in': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-1-delay-primary': 'calc(var(--key-0-dur-remaining) * .15)',
					'--copy-1-dur-primary': 'calc(var(--key-0-dur-remaining) * .05)',
					'--copy-1-delay-out': 'calc(var(--key-0-dur-remaining) * .25)',
					'--copy-1-dur-out': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-1-func-primary': 'linear',
					'--copy-1-iterate-primary': 'infinite',
					'--copy-1-dir-primary': 'alternate',
					'--copy-1-t-y': '0%',
					'--copy-1-t-y-amount-in': '0%',
					'--copy-1-t-y-amount-primary': '-5%',
					'--copy-1-t-y-amount-out': '0%',

					'--copy-default-font-family': '"フィバ字"',
					'--copy-default-font-size': '3.5rem',
					
					'--key-0-delay-primary': '0s',
					'--key-0-dur-primary': 'calc(var(--key-0-dur-remaining) * .2)',
					'--key-0-s': 5, '--key-0-s-to': 'var(--key-0-s)',
					'--key-0-x': 0.5, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0.1, '--key-0-y-to': 'var(--key-0-y)',
					'--key-0-func': 'cubic-bezier(.69,4.71,.4,-4.43)',
					'--key-0-iterate': 'infinite',
					'--key-0-dir': 'alternate',
					'--key-0-transform': 'translate(0%,0%)',
					'--key-0-transform-to': 'translate(0%,2%)',
					
					'--key-1-delay-primary': '0s',
					'--key-1-dur-primary': 'calc(var(--key-0-dur-remaining) * .15)',
					'--key-1-s': 4, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 0.575, '--key-1-x-to': 'var(--key-1-x)',
					'--key-1-y': 0.3, '--key-1-y-to': 'var(--key-1-y)',
					'--key-1-func': 'cubic-bezier(.69,4.71,.4,-4.43)',
					'--key-1-iterate': 'infinite',
					'--key-1-dir': 'alternate',
					'--key-1-transform': 'translate(0%,0%)',
					'--key-1-transform-to': 'translate(0%,-2%)',
					
					'--key-2-delay-in': '0s',
					'--key-2-dur-in': 'calc(var(--key-0-dur-remaining) * .2)',
					'--key-2-delay-primary': '0s',
					'--key-2-dur-primary': 'calc(var(--key-2-dur-remaining) * .6)',
					'--key-2-delay-out': 'calc((var(--key-2-dur-remaining) - var(--key-2-delay-in)) * .9)',
					'--key-2-dur-out': 'calc((var(--key-2-dur-remaining) - var(--key-2-delay-in)) * .1)',
					//'--key-2-delay-primary': '0s', '--key-2-dur-primary': '!0.1!s',
					//'--key-2-delay-out': 'calc(!0.9!s - ?0.05?s)', '--key-2-dur-out': '?0.05?s',
					'--key-2-s': 1, '--key-2-s-to': 'var(--key-2-s)',
					'--key-2-x': 0, '--key-2-x-to': 'var(--key-2-x)',
					'--key-2-y': 0, '--key-2-y-to': 'var(--key-2-y)',
					'--key-2-func': 'ease-out',
					'--key-2-iterate': 'infinite',
					'--key-2-dir': 'alternate',
					'--key-2-transform': 'translate(0%,1%) scale(1.1)',
					'--key-2-transform-to': 'translate(0%,5%) scale(1.1)',
					'--key-2-opacity-out-to': 1
					
				},
				children: '{default_intercept?default_content}'
			},
			default_seventeen: {
				end: true,
				style: {
					
					//'--dur-0': '?0.2?s',
					//
					//'--dur-1': '?0.2?s',
					//'--transform-origin-2': 'center'
					
					//'--from-x-0': '-280%',
					//'--from-y-0': '-150%',
					//'--to-y-0': '-200%',
					//'--from-w-0': '600%',
					//'--from-h-0': '600%',

					//'--from-x-1': '-130%',
					//'--to-x-1': '-160%',
					//'--from-y-1': '-250%',
					//'--from-w-1': '450%',
					//'--from-h-1': '450%',
					//
					//'--from-t-2': 'scale(1.1)',
					//'--to-t-2': 'scale(1)',

					'--key-0-delay-primary': '0s', '--key-0-dur-primary': 'calc(var(--key-0-dur-remaining) * .2)',
					'--key-0-delay-out': 'calc(var(--key-0-dur-primary) - var(--key-0-dur-out))',
					'--key-0-s': 6, '--key-0-s-to': 'var(--key-0-s)',
					'--key-0-x': 0.55, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0.28, '--key-0-y-to': 0.39,
					
					'--key-1-delay-primary': '0s', '--key-1-dur-primary': 'calc(var(--key-0-dur-remaining) * .3)',
					'--key-1-delay-out': 'calc(var(--key-1-dur-primary) - var(--key-1-dur-out))',
					'--key-1-func': 'linear',
					'--key-1-s': 5, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 0.39, '--key-1-x-to': 0.42,
					'--key-1-y': 0.71, '--key-1-y-to': 'var(--key-1-y)',
					
					'--key-2-delay-in': '0s', '--key-2-dur-in': 'calc(var(--key-0-dur-remaining) * .2)',
					'--key-2-delay-primary': '0s', '--key-2-dur-primary': 'var(--key-2-dur-remaining)',
					'--key-2-delay-out': 'calc((var(--key-2-dur-remaining) - var(--key-2-delay-in)) - var(--key-2-dur-out))', '--key-2-dur-out': 'calc((var(--key-2-dur-remaining) - var(--key-2-delay-in)) * .1)',
					'--key-2-s': 1, '--key-2-s-to': 'var(--key-2-s)',
					'--key-2-x': 0, '--key-2-x-to': 'var(--key-2-x)',
					'--key-2-y': 0, '--key-2-y-to': 'var(--key-2-y)',
					'--key-2-transform': 'scale(1.1)',
					'--key-2-transform-to': 'scale(1)',
					'--key-2-opacity-out-to': '1'
					
				},
				children: '{default_intercept?default_content}'
			},
			default_content: [
				'{default_timeout}',
				'{default_notation}',
				'{file_meta}',
				{
					end: { event: { animationend: [ { target: true, count: 2, name: 'transition2' } ] } },
					attr: { 'class': 'viewport' },
					children: '{default_anime}'
				}
			],
			default_timeout: {
				end: { event: { animationend: [ { target: true, count: 1, name: 'timeout-end' } ] } },
				attr: { 'class': 'timeout' }
			},
			default_notation: {
				begin: '[[default_begin_constrain]]',
				end: true,
				attr: { 'class': 'key in note', 'data-notation': '[[file_note]]' },
				style: {
					
					'--delay-in': 'calc(var(--time-remaining) * 1 / 10)',
					'--dur-in': 'calc(var(--time-remaining) * .05)',
					
					'--delay-primary': '0s',
					'--dur-primary': 'calc(var(--time-remaining) * .9)',
					
					'--delay-out': 'calc((var(--delay-primary) + var(--dur-primary)) - var(--dur-out))',
					'--dur-out': 'var(--dur-in)',
					
				},
				children: '{default_notation_content}'
			},
			default_notation_content: {
				end: { event: { animationend: { target: true, name: 'key' } } },
				attr: { 'class': 'key out' },
				children: { attr: { 'class': 'key primary', 'data-notation': '[[file_note]]' }, }
			},
			file_meta: {
				begin: '[[default_begin_constrain]]',
				end: true,
				attr: { 'class': 'meta' },
				style: {
					
					'opacity': 1,
					
					'--delay-in': 'calc(var(--time-remaining) * .5)',
					//'--delay-in': 'calc(var(--time-remaining) * .0)',
					'--dur-in': 'calc(var(--time-remaining) * .025)',
					'--delay-out': 'calc(var(--time-remaining) * .85)',
					'--dur-out': 'var(--dur-in)',
					/*
					'--delay-in': 'calc(var(--time-remaining) * 0)',
					//'--delay-in': 'calc(var(--time-remaining) * .0)',
					'--dur-in': 'calc(var(--time-remaining) * .025)',
					'--delay-out': 'calc(var(--time-remaining) * 1)',
					'--dur-out': 'var(--dur-in)',
					*/
					'--delay-vr-in': 'var(--delay-in)',
					'--dur-vr-in': 'var(--dur-in)',
					'--delay-vr-out': 'var(--delay-out)',
					'--dur-vr-out': 'var(--dur-vr-in)',
					
				},
				children: '{file_meta_content}'
			},
			file_meta_content: [
				{
					end: true, attr: { 'class': 'key in meta-pane-0' },
					children: {
						end: { event: { animationend: { target: true, name: 'key' } } },
						attr: { 'class': 'key out' },
						children: {
							attr: { 'class': 'key' },
							children: { tag: 'div', attr: { 'class': 'file-title' }, html: '[[file_title]]' }
						}
					}
				},
				{
					end: true, attr: { 'class': 'key in vertical-rule' },
					children: {
						end: { event: { animationend: { target: true, name: 'key' } } },
						attr: { 'class': 'key out' },
						children: { attr: { 'class': 'key' } }
					}
				},
				{
					end: true, attr: { 'class': 'key in meta-pane-1' }, end: true,
					children: {
						end: { event: { animationend: { target: true, name: 'key' } } },
						attr: { 'class': 'key out' },
						children: {
							attr: { 'class': 'key' },
							children: [
								{ tag: 'div', attr: { 'class': 'file-author' }, html: '[[file_author]]' },
								{ tag: 'div', attr: { 'class': 'file-date' }, html: '[[file_date]]' }
							]
						}
					}
				}
			],
			default_anime: [
				'{default_copy}',
				'{file_description}',
				'{default_key}'
			],
			default_copy: {
				begin: '[[default_begin_constrain]]',
				end: true,
				attr: { 'class': 'copy key' },
				style: {
					
					'--k-time': 'var(--time-remaining)',
					'--transform': 'var(--copy-transform, translate(0%,10%))',
					'--copy-text-shadow': 'var(--copy-default-text-shadow, 0px 1px 0px rgba(0,0,0,1), 0px 0px .2rem rgba(0,0,0,1), 0px 0px 1rem rgba(0,0,0,1))',
					'--margin': 'var(--copy-default-margin)',
					'--padding': 'var(--copy-default-padding)',
					//'--copy-font-family:' '',
					//'--copy-font-size:' '',
					//'--copy-font-weight:' '',
					//'--copy-letter-spacing:' '',
					//'--copy-font-break:' '',
					
				},
				children: [
					{
						end: true,
						attr: {
							'class': 'key in',
							'data-share-css-q': '.view-root',
							'data-share-css-filter': '--copy-0-dur-remaining'
						},
						style: {
							
							// この !1!s の値は、ファイルが持つすべての要素に各々一意に与えられる --time-remaining で取得できるものと同一であるが、
							// 置き換えはできない。
							// この値が設定された CSS 変数は、この要素の属性 data-share-css-q が示すクエリー文字列の要素と共有される。
							// 仮にこの値が --time-remaining だった場合、共有先の要素はこの要素の --time-remaining ではなく、
							// 自身の持つ --time-remaining の値を参照するため、
							// その変数を使う動作がこの要素の --time-remaining を想定するものだった場合、不整合に陥る。
							// !1!s は、スクリプトを通じて変数ではなくを直接書きこむため共有先でも同一の値を使うことができる。
							'--copy-0-dur-remaining': '!1!s',
							
							'--key-animation-begin': 'var(--copy-0-animation-begin)',
							'--key-animation-transition': 'var(--copy-0-animation-transition)',
							'--key-animation-delay': 'var(--copy-0-animation-delay)',
							'--key-animation-duration': 'var(--copy-0-animation-duration)',
							'--key-animation-end-transition': 'var(--copy-0-animation-end-transition)',
							
							'--delay-in': 'var(--copy-0-delay-in)',
							'--dur-in': 'var(--copy-0-dur-in)',
							'--delay-primary': 'var(--copy-0-delay-primary)',
							'--dur-primary': 'var(--copy-0-dur-primary)',
							'--delay-out': 'var(--copy-0-delay-out)',
							'--dur-out': 'var(--copy-0-dur-out)',
							
							'--copy-func-in': 'var(--copy-0-func-in)',
							'--copy-iterate-in': 'var(--copy-0-iterate-in)',
							'--copy-dir-in': 'var(--copy-0-dir-in)',
							'--copy-func-primary': 'var(--copy-0-func-primary)',
							'--copy-iterate-primary': 'var(--copy-0-iterate-primary)',
							'--copy-dir-primary': 'var(--copy-0-dir-primary)',
							'--copy-func-out': 'var(--copy-0-func-out)',
							'--copy-iterate-out': 'var(--copy-0-iterate-out)',
							'--copy-dir-out': 'var(--copy-0-dir-out)',
							
							'--t-x-in': 'var(--copy-0-t-x)',
							'--t-x-amount-in': 'var(--copy-0-t-x-amount-in)',
							'--t-x-amount-primary': 'var(--copy-0-t-x-amount-primary)',
							'--t-x-amount-out': 'var(--copy-0-t-x-amount-out)',
							'--t-y-in': 'var(--copy-0-t-y)',
							'--t-y-amount-in': 'var(--copy-0-t-y-amount-in)',
							'--t-y-amount-primary': 'var(--copy-0-t-y-amount-primary)',
							'--t-y-amount-out': 'var(--copy-0-t-y-amount-out)',
							'--t-s-in': 'var(--copy-0-t-s-in, 1)',
							'--t-s-in-to': 'var(--copy-0-t-s-in-to, var(--t-s-in))',
							'--t-s-primary': 'var(--copy-0-t-s-primary, 1)',
							'--t-s-primary-to': 'var(--copy-0-t-s-primary-to, var(--t-s-primary))',
							'--t-s-out': 'var(--copy-0-t-s-out, 1)',
							'--t-s-out-to': 'var(--copy-0-t-s-out-to, var(--t-s-out))',
							'--t-w-in': 'var(--copy-0-t-w-in)',
							'--t-w-in-to': 'var(--copy-0-t-w-in-to, var(--t-w-in))',
							'--t-w-primary': 'var(--copy-0-t-w-primary)',
							'--t-w-primary-to': 'var(--copy-0-t-w-primary-to, var(--t-w-primary))',
							'--t-w-out': 'var(--copy-0-t-w-out)',
							'--t-w-out-to': 'var(--copy-0-t-w-out-to, var(--t-w-out))',
							'--t-h-in': 'var(--copy-0-t-h-in)',
							'--t-h-in-to': 'var(--copy-0-t-h-in-to, var(--t-h-in))',
							'--t-h-primary': 'var(--copy-0-t-h-primary)',
							'--t-h-primary-to': 'var(--copy-0-t-h-primary-to, var(--t-h-primary))',
							'--t-h-out': 'var(--copy-0-t-h-out)',
							'--t-h-out-to': 'var(--copy-0-t-h-out-to, var(--t-h-out))',
							'--t-r-in': 'var(--copy-0-t-r-in, 0deg)',
							'--t-r-in-to': 'var(--copy-0-t-r-in-to, var(--t-r-in))',
							'--t-r-primary': 'var(--copy-0-t-r-primary, 0deg)',
							'--t-r-primary-to': 'var(--copy-0-t-r-primary-to, var(--t-r-primary))',
							'--t-r-out': 'var(--copy-0-t-r-out, 0deg)',
							'--t-r-out-to': 'var(--copy-0-t-r-out-to, var(--t-r-out))',
							
							'--filter': 'var(--copy-0-filter)',
							'--position': 'var(--copy-0-position, relative)',
							'--text-shadow': 'var(--copy-0-text-shadow, var(--copy-text-shadow, none))',
							'--writing-mode': 'var(--copy-0-writing-mode, var(--copy-writing-mode, vertical-rl))',
							
							'--copy-border': 'var(--copy-0-border)',
							'--copy-border-to': 'var(--copy-0-border-to)',
							'--copy-border-radius': 'var(--copy-0-border-radius)',
							'--copy-border-radius-to': 'var(--copy-0-border-radius-to)',
							'--copy-background': 'var(--copy-0-background)',
							'--copy-background-to': 'var(--copy-0-background-to)',
							'--copy-margin': 'var(--copy-0-margin)',
							'--copy-margin-to': 'var(--copy-0-margin-to)',
							'--copy-padding': 'var(--copy-0-padding)',
							'--copy-padding-to': 'var(--copy-0-padding-to)',
							'--copy-top': 'var(--copy-0-top)',
							'--copy-top-to': 'var(--copy-0-top-to)',
							'--copy-right': 'var(--copy-0-right)',
							'--copy-right-to': 'var(--copy-0-right-to)',
							'--copy-bottom': 'var(--copy-0-bottom)',
							'--copy-bottom-to': 'var(--copy-0-bottom-to)',
							'--copy-left': 'var(--copy-0-left)',
							'--copy-left-to': 'var(--copy-0-left-to)',
							'--copy-width': 'var(--copy-0-width)',
							'--copy-height': 'var(--copy-0-height)',
							'--copy-width-to': 'var(--copy-0-width-to)',
							'--copy-height-to': 'var(--copy-0-height-to)',
							
							'--copy-font-family': 'var(--copy-0-font-family, var(--copy-default-font-family))',
							'--copy-font-size': 'var(--copy-0-font-size, var(--copy-default-font-size))',
							'--copy-font-weight': 'var(--copy-0-font-weight, var(--copy-default-font-weight))',
							'--copy-letter-spacing': 'var(--copy-0-letter-spacing, var(--copy-default-letter-spacing))',
							'--copy-word-break': 'var(--copy-0-word-break, var(--copy-default-word-break))',
							'--copy-white-space': 'var(--copy-0-white-space, var(--copy-default-white-space))',
							
						},
						children: {
							//end: { event: { animationend: { target: true, name: 'key' } } },
							attr: { 'class': 'key out' },
							children: {
								html: '[[file_copy_0]]', tag: 'div', attr: { 'class': 'key copy-content' },
								style: {}
							}
						},
					},
					{
						end: true,
						attr: {
							'class': 'key in',
							'data-share-css-q': '.view-root',
							'data-share-css-filter': '--copy-1-dur-remaining'
						},
						style: {
							
							'--copy-1-dur-remaining': '!1!s',
							
							'--key-animation-begin': 'var(--copy-1-animation-begin, initial)',
							'--key-animation-transition': 'var(--copy-1-animation-transition, initial)',
							'--key-animation-delay': 'var(--copy-1-animation-delay, initial)',
							'--key-animation-duration': 'var(--copy-1-animation-duration, initial)',
							//'--key-animation-end': 'var(--copy-1-animation-end, initial)',
							'--key-animation-end-transition': 'var(--copy-1-animation-end-transition, initial)',
							
							'--delay-in': 'var(--copy-1-delay-in)',
							'--dur-in': 'var(--copy-1-dur-in)',
							'--delay-primary': 'var(--copy-1-delay-primary)',
							'--dur-primary': 'var(--copy-1-dur-primary)',
							'--delay-out': 'var(--copy-1-delay-out)',
							'--dur-out': 'var(--copy-1-dur-out)',
							
							'--t-x-in': 'var(--copy-1-t-x)',
							'--t-x-amount-in': 'var(--copy-1-t-x-amount-in)',
							'--t-x-amount-primary': 'var(--copy-1-t-x-amount-primary)',
							'--t-x-amount-out': 'var(--copy-1-t-x-amount-out)',
							'--t-y-in': 'var(--copy-1-t-y)',
							'--t-y-amount-in': 'var(--copy-1-t-y-amount-in)',
							'--t-y-amount-primary': 'var(--copy-1-t-y-amount-primary)',
							'--t-y-amount-out': 'var(--copy-1-t-y-amount-out)',
							'--t-s-in': 'var(--copy-1-t-s-in, 1)',
							'--t-s-in-to': 'var(--copy-1-t-s-in-to, var(--t-s-in))',
							'--t-s-primary': 'var(--copy-1-t-s-primary, 1)',
							'--t-s-primary-to': 'var(--copy-1-t-s-primary-to, var(--t-s-primary))',
							'--t-s-out': 'var(--copy-1-t-s-out, 1)',
							'--t-s-out-to': 'var(--copy-1-t-s-out-to, var(--t-s-out))',
							'--t-w-in': 'var(--copy-1-t-w-in)',
							'--t-w-in-to': 'var(--copy-1-t-w-in-to, var(--t-w-in))',
							'--t-w-primary': 'var(--copy-1-t-w-primary)',
							'--t-w-primary-to': 'var(--copy-1-t-w-primary-to, var(--t-w-primary))',
							'--t-w-out': 'var(--copy-1-t-w-out)',
							'--t-w-out-to': 'var(--copy-1-t-w-out-to, var(--t-w-out))',
							'--t-h-in': 'var(--copy-1-t-h-in)',
							'--t-h-in-to': 'var(--copy-1-t-h-in-to, var(--t-h-in))',
							'--t-h-primary': 'var(--copy-1-t-h-primary)',
							'--t-h-primary-to': 'var(--copy-1-t-h-primary-to, var(--t-h-primary))',
							'--t-h-out': 'var(--copy-1-t-h-out)',
							'--t-h-out-to': 'var(--copy-1-t-h-out-to, var(--t-h-out))',
							'--t-r-in': 'var(--copy-1-t-r-in, 0deg)',
							'--t-r-in-to': 'var(--copy-1-t-r-in-to, var(--t-r-in))',
							'--t-r-primary': 'var(--copy-1-t-r-primary, 0deg)',
							'--t-r-primary-to': 'var(--copy-1-t-r-primary-to, var(--t-r-primary))',
							'--t-r-out': 'var(--copy-1-t-r-out, 0deg)',
							'--t-r-out-to': 'var(--copy-1-t-r-out-to, var(--t-r-out))',
							
							'--filter': 'var(--copy-1-filter)',
							'--position': 'var(--copy-1-porition, relative)',
							'--text-shadow': 'var(--copy-1-text-shadow, var(--copy-text-shadow, none))',
							'--writing-mode': 'var(--copy-1-writing-mode, var(--copy-writing-mode, vertical-rl))',
							
							'--copy-func-in': 'var(--copy-1-func-in)',
							'--copy-iterate-in': 'var(--copy-1-iterate-in)',
							'--copy-dir-in': 'var(--copy-1-dir-in)',
							'--copy-func-primary': 'var(--copy-1-func-primary)',
							'--copy-iterate-primary': 'var(--copy-1-iterate-primary)',
							'--copy-dir-primary': 'var(--copy-1-dir-primary)',
							'--copy-func-out': 'var(--copy-1-func-out)',
							'--copy-iterate-out': 'var(--copy-1-iterate-out)',
							'--copy-dir-out': 'var(--copy-1-dir-out)',
							
							'--copy-border': 'var(--copy-1-border)',
							'--copy-border-to': 'var(--copy-1-border-to)',
							'--copy-border-radius': 'var(--copy-1-border-radius)',
							'--copy-border-radius-to': 'var(--copy-1-border-radius-to)',
							'--copy-background': 'var(--copy-1-background)',
							'--copy-background-to': 'var(--copy-1-background-to)',
							'--copy-margin': 'var(--copy-1-margin)',
							'--copy-margin-to': 'var(--copy-1-margin-to)',
							'--copy-padding': 'var(--copy-1-padding)',
							'--copy-padding-to': 'var(--copy-1-padding-to)',
							'--copy-position': 'var(--copy-1-position)',
							'--copy-top': 'var(--copy-1-top)',
							'--copy-top-to': 'var(--copy-1-top-to)',
							'--copy-right': 'var(--copy-1-right)',
							'--copy-right-to': 'var(--copy-1-right-to)',
							'--copy-bottom': 'var(--copy-1-bottom)',
							'--copy-bottom-to': 'var(--copy-1-bottom-to)',
							'--copy-left': 'var(--copy-1-left)',
							'--copy-left-to': 'var(--copy-1-left-to)',
							'--copy-width': 'var(--copy-1-width)',
							'--copy-height': 'var(--copy-1-height)',
							
							'--copy-font-family': 'var(--copy-1-font-family, var(--copy-default-font-family))',
							'--copy-font-size': 'var(--copy-1-font-size, var(--copy-default-font-size))',
							'--copy-font-weight': 'var(--copy-1-font-weight, var(--copy-default-font-weight))',
							'--copy-letter-spacing': 'var(--copy-1-letter-spacing, var(--copy-default-letter-spacing))',
							'--copy-word-break': 'var(--copy-1-word-break, var(--copy-default-word-break))',
							'--copy-white-space': 'var(--copy-1-white-space, var(--copy-default-white-space))',
							
						},
						children: {
							//end: { event: { animationend: { target: true, name: 'key' } } },
							attr: { 'class': 'key out' },
							children: {
								html: '[[file_copy_1]]', tag: 'div', attr: { 'class': 'key copy-content' },
								style: {}
							}
						}
					}
				]
			},
			default: {
				end: true,
				attr: { 'class': 'view-root', 'data-note': '[[file_note]]' },
				style: {
					
					//coco これら attr 関連の変数を copy と key へ組み込む。
					'--attr-animation-begin': 0.1,
					'--attr-animation-transition': 0.4,
					'--attr-animation-delay': 0.4,
					'--attr-animation-duration': 0.1,
					//'--attr-animation-end': 0.1,
					'--attr-animation-end-transition': 0.1,
					/*
					'--attr-key-delay-in': 0,
					'--attr-key-dur-in': 0.5,
					'--attr-key-delay-primary': 0.8,
					'--attr-key-dur-primary': 0.2,
					'--attr-key-delay-out': 0.8,
					'--attr-key-dur-out': 0.2,
					*/
					// attr-key と通常 key との境目は重要な意味を持つため、attr-key-end など明示的な名前にすべき。
					'--attr-key-time-diff': 'calc(var(--time-diff) * var(--attr-key-1-delay) * var(--has-time-diff))',
					
					// file_copy_0 の表示設定
					'--copy-0-animation-begin': 0.1,
					'--copy-0-animation-transition': 0.1,
					'--copy-0-animation-delay': 0.1,
					'--copy-0-animation-duration': 0.4,
					'--copy-0-animation-end-transition': 0.05,
					/*
					'--copy-0-delay-in': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-0-dur-in': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-0-delay-primary': 'calc(var(--key-0-dur-remaining) * .2)',
					'--copy-0-dur-primary': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-0-delay-out': 'calc(var(--key-0-dur-remaining) * .3)',
					'--copy-0-dur-out': 'calc(var(--key-0-dur-remaining) * .05)',
					*/
					'--copy-0-t-x': '0%',
					'--copy-0-t-x-amount-in': '0%',
					'--copy-0-t-x-amount-primary': '0%',
					'--copy-0-t-x-amount-out': '0%',
					'--copy-0-t-y': '-3%',
					'--copy-0-t-y-amount-in': '5%',
					'--copy-0-t-y-amount-primary': '3%',
					'--copy-0-t-y-amount-out': '5%',
					// s は拡大・縮小、r は回転、接尾辞 -to も対応
					//'--copy-0-t-s-primary': '1',
					//'--copy-0-t-r-primary': '0deg',
					// フォント関連、接尾辞 -to も対応
					//'--copy-0-font-family': '"メイリオ"',
					//'--copy-0-font-size': 5rem,
					//'--copy-0-font-weight': bold,
					//'--copy-0-line-height-line-height': 1,
					//'--copy-0-word-break': keep-all,
					//'--copy-0-func-in': 'linear',
					
					'--copy-1-animation-begin': 0.21,
					'--copy-1-animation-transition': 0.1,
					'--copy-1-animation-delay': 0.21,
					'--copy-1-animation-duration': 0.4,
					'--copy-1-animation-end-transition': 0.05,
					/*
					'--copy-1-delay-in': 'calc(var(--key-0-dur-remaining) * .21)',
					'--copy-1-dur-in': 'calc(var(--key-0-dur-remaining) * .1)',
					'--copy-1-delay-primary': 'calc(var(--key-0-dur-remaining) * .31)',
					'--copy-1-dur-primary': 'calc(var(--key-0-dur-remaining) * .49)',
					'--copy-1-delay-out': 'calc(var(--key-0-dur-remaining) * .8)',
					'--copy-1-dur-out': 'calc(var(--key-0-dur-remaining) * .05)',
					*/
					'--copy-1-t-x': '0%',
					'--copy-1-t-x-amount-in': '0%',
					'--copy-1-t-x-amount-primary': '0%',
					'--copy-1-t-x-amount-out': '0%',
					'--copy-1-t-y': '7%',
					'--copy-1-t-y-amount-in': '-5%',
					'--copy-1-t-y-amount-primary': '-3%',
					'--copy-1-t-y-amount-out': '-5%',
					'--copy-1-func': 'linear',
					
					'--key-0-delay-in': '0s',
					'--key-0-dur-in': 'calc(var(--key-0-dur-remaining) * .05)',
					'--key-0-delay-primary': '0s',
					'--key-0-dur-primary': 'calc(var(--key-0-dur-remaining) * .15)',
					'--key-0-delay-out': 'calc(var(--key-0-delay-primary) + (var(--key-0-dur-primary)) - var(--key-0-dur-out))',
					'--key-0-dur-out': 'var(--key-0-dur-in)',
					'--key-0-s': 2.5, '--key-0-s-to': 'var(--key-0-s)',
					'--key-0-x': 0.3, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0.1, '--key-0-y-to': 0.275,
					'--key-0-transform': 'none', '--key-0-transform-to': 'var(--key-0-transform)',
					
					'--key-1-delay-in': '0s',
					'--key-1-dur-in': 'calc(var(--key-0-dur-remaining) * .05)',
					'--key-1-delay-primary': '0s',
					'--key-1-dur-primary': 'calc(var(--key-0-dur-remaining) * .15)',
					'--key-1-delay-out': 'calc(var(--key-0-dur-remaining) * .1)',
					'--key-1-dur-out': 'var(--key-1-dur-in)',
					'--key-1-s': 4, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 0.55, '--key-1-x-to': 0.61,
					'--key-1-y': 0.075, '--key-1-y-to': 'var(--key-1-y)',
					'--key-1-transform': 'none', '--key-1-transform-to': 'var(--key-1-transform)',
					
					'--key-2-delay-in': '0s',
					'--key-2-dur-in': 'calc(var(--key-0-dur-remaining) * .05)',
					'--key-2-delay-primary': '0s',
					// --key-2-dur-primary, --key-2-delay-out は、対応するファイル記述子内で直接相対値で指定している。
					// このように、!任意の値! で指定する相対値の場合は、実際のファイル記述子内で指定しないと想定する値を得られない。
					// 以下のコメントを外した上で任意の値に書き換えれば自動的に上書きできる。
					//'--key-2-dur-primary': '0s',
					//'--key-2-delay-out': '0s',
					'--key-2-dur-out': 'var(--key-2-dur-in)',
					'--key-2-s': 1, '--key-2-s-to': 'var(--key-2-s)',
					'--key-2-x': 0, '--key-2-x-to': 'var(--key-2-x)',
					'--key-2-y': 0, '--key-2-y-to': 'var(--key-2-y)',
					'--key-2-transform': 'translate(0%,5%) scale(1.05)',
					'--key-2-transform-to': 'translate(0%,5%) scale(1.15)',
					'--key-2-func': 'ease-out',
					'--key-2-iterate': 1,
					'--key-2-z-index': -1
					
				},
				children: '[[file_template:{default_content}]]'
			},
			file_description: {
				begin: '[[default_begin_constrain]]',
				end: true,
				attr: {
					'class': 'key in desc',
					'data-file-description': '[[file_description]]',
					'data-file-description-position': '[[file_description_pos]]'
				},
				style: {
					
					'--k-time': 'var(--time-remaining)',
					'--key-animation-begin': 0.1,
					'--key-animation-transition': .04,
					'--key-animation-duration': 0.5,
					
				},
				children: {
					end: { event: { animationend: { target: true, name: 'key' } } },
					attr: { 'class': 'key out' },
					children: {
						attr: { 'class': 'key primary' },
						html: '[[file_description]]'
					}
				}
			},
			default_simplex: {
				end: true,
				attr: { 'class': 'hr-copy' },
				style: {
					
					// file_copy_0 の表示設定
					'--copy-default-font-family': '"メイリオ"',
					'--copy-default-white-space': 'normal',
					'--copy-default-word-break': 'break-all',
					'--copy-default-font-size': '5vmax',
					'--copy-default-padding': '4.5vmax 0 0 2vmax',
					
					'--copy-0-animation-begin': 0.25,
					'--copy-0-animation-transition': 0.05,
					'--copy-0-animation-delay': 'var(--copy-0-animation-begin)',
					'--copy-0-animation-duration': 0.6,
					'--copy-0-animation-end': 'initial',
					'--copy-0-animation-end-transition': 'initial',
					
					'--copy-0-delay-in': 'initial',
					'--copy-0-dur-in': 'initial',
					'--copy-0-delay-primary': 'initial',
					'--copy-0-dur-primary': 'initial',
					'--copy-0-delay-out': 'initial',
					'--copy-0-dur-out': 'initial',
					/*'--copy-0-delay-in': 'calc(var(--a-current-duration) * var(--copy-0-animation-in-begin))',
					'--copy-0-dur-in': 'calc(var(--a-current-duration) * var(--copy-0-animation-in-transition))',
					'--copy-0-delay-primary': '0s',
					'--copy-0-dur-primary': 'calc(var(--a-current-duration) * var(--copy-0-animation-in-duration))',
					'--copy-0-delay-out': 'calc((var(--copy-0-delay-primary) + var(--copy-0-dur-primary)) - var(--copy-0-dur-out))',
					'--copy-0-dur-out': 'var(--copy-0-dur-in)',*/
					'--copy-0-t-x': '3%',
					'--copy-0-t-x-amount-in': '-3%',
					'--copy-0-t-x-amount-primary': '0%',
					'--copy-0-t-x-amount-out': '-2%',
					'--copy-0-t-y': '0%',
					'--copy-0-t-y-amount-in': '0%',
					'--copy-0-t-y-amount-primary': '0%',
					'--copy-0-t-y-amount-out': '0%',
					// s は拡大・縮小、r は回転、接尾辞 -to も対応
					//'--copy-0-t-s-primary': '1',
					//'--copy-0-t-r-primary': '0deg',
					// フォント関連、接尾辞 -to も対応
					//'--copy-0-font-size': 5rem,
					//'--copy-0-font-weight': bold,
					//'--copy-0-line-height-line-height': 1,
					//'--copy-0-word-break': keep-all,
					//'--copy-0-func-in': 'linear',
					'--copy-0-margin': '0 0 .5vmax 0',
					
					'--copy-1-animation-begin': 'calc(var(--copy-0-animation-begin) + 0.05)',
					'--copy-1-animation-transition': 'var(--copy-0-animation-transition)',
					'--copy-1-animation-delay': 'var(--copy-1-animation-begin)',
					'--copy-1-animation-duration': 'var(--copy-0-animation-duration)',
					//'--copy-1-animation-end': 'initial',
					//'--copy-1-animation-end-transition': 'initial',
					
					'--copy-1-delay-in': 'initial',
					'--copy-1-dur-in': 'initial',
					'--copy-1-delay-primary': 'initial',
					'--copy-1-dur-primary': 'initial',
					'--copy-1-delay-out': 'initial',
					'--copy-1-dur-out': 'initial',
					/*'--copy-1-delay-in': 'calc(var(--a-current-duration) * var(--copy-1-animation-in-begin))',
					'--copy-1-dur-in': 'calc(var(--a-current-duration) * var(--copy-1-animation-in-transition))',
					'--copy-1-delay-primary': '0s',
					'--copy-1-dur-primary': 'calc(var(--a-current-duration) * var(--copy-1-animation-in-duration) + (var(--copy-1-delay-in) - var(--copy-0-delay-in)))',
					'--copy-1-delay-out': 'calc((var(--copy-1-delay-primary) + var(--copy-1-dur-primary)) - var(--copy-1-dur-out))',*/
					'--copy-1-t-x': '3%',
					'--copy-1-t-x-amount-in': '-3%',
					'--copy-1-t-x-amount-primary': '0%',
					'--copy-1-t-x-amount-out': '-2%',
					'--copy-1-t-y': '0%',
					'--copy-1-t-y-amount-in': '0%',
					'--copy-1-t-y-amount-primary': '0%',
					'--copy-1-t-y-amount-out': '0%',
					
					'--key-0-delay-in': '0s',
					'--key-0-dur-in': 'calc(var(--key-0-dur-remaining) * .05)',
					'--key-0-delay-primary': '0s',
					'--key-0-dur-primary': 'var(--key-0-dur-remaining)',
					'--key-0-delay-out': 'calc((var(--key-0-delay-primary) + var(--key-0-dur-primary)) - var(--key-0-dur-out))',
					'--key-0-dur-out': 'var(--key-0-dur-in)',
					'--key-0-s': 1, '--key-0-s-to': 'var(--key-0-s)',
					'--key-0-x': 0, '--key-0-x-to': 'var(--key-0-x)',
					'--key-0-y': 0, '--key-0-y-to': 'var(--key-0-y)',
					'--key-0-transform': 'none', '--key-0-transform-to': 'var(--key-0-transform-to)',
					'--key-0-func': 'ease-out',
					'--key-0-iterate': 1,
					'--key-0-z-index': -1,
					
					'--key-1-delay-in': '0s', '--key-1-dur-in': 'var(--key-1-delay-in)',
					'--key-1-delay-primary': 'var(--key-1-delay-in)', '--key-1-dur-primary': 'var(--key-1-delay-in)',
					'--key-1-delay-out': 'var(--key-1-delay-in)', '--key-1-dur-out': 'var(--key-1-delay-in)',
					'--key-1-s': 0, '--key-1-s-to': 'var(--key-1-s)',
					'--key-1-x': 'var(--key-1-s)', '--key-1-x-to': 'var(--key-1-x)',
					'--key-1-y': 'var(--key-1-s)', '--key-1-y-to': 'var(--key-1-s)',
					'--key-1-transform': 'none', '--key-1-transform-to': 'var(--key-1-transform)',
					
					'--key-2-delay-in': 'var(--key-1-delay-in)', '--key-2-dur-in': 'var(--key-1-delay-in)',
					'--key-2-delay-primary': 'var(--key-1-delay-in)', '--key-2-dur-primary': 'var(--key-1-delay-in)',
					'--key-2-delay-out': 'var(--key-1-delay-in)', '--key-2-dur-out': 'var(--key-1-delay-in)',
					'--key-2-s': 'var(--key-1-s)', '--key-2-s-to': 'var(--key-1-s)',
					'--key-2-x': 'var(--key-1-s)', '--key-2-x-to': 'var(--key-1-s)',
					'--key-2-y': 'var(--key-1-s)', '--key-2-y-to': 'var(--key-1-s)',
					'--key-2-transform': 'var(--key-1-transform)', '--key-2-transform-to': 'var(--key-1-transform)',
					
				},
				children: '{default_intercept?default_content}'
			},
			attr_content: [
				{
					attr: { 'class': 'key in attr-author attr-data' },
					children: {
						attr: { 'class': 'key out' },
						children: {
							attr: { 'class': 'key primary' },
							html: '[[file_author]]',
						}
					}
				},
				{
					attr: { 'class': 'key in attr-name attr-data' },
					children: {
						attr: { 'class': 'key out' },
						children: {
							attr: { 'class': 'key primary' },
							html: 'ゲストアート',
						}
					}
				}
			],
			default_attr: [
				{
					end: true,
					attr: { 'class': 'key in attr-bg' },
					style: {
						
						'--key-animation-begin': 'var(--attr-animation-begin)',
						'--key-animation-transition': 'var(--attr-animation-transition)',
						'--key-animation-delay': 'var(--attr-animation-delay)',
						'--key-animation-duration': 'var(--attr-animation-duration)',
						'--key-animation-end-transition': 'var(--attr-animation-end-transition)',
						
					},
					children: {
						end: { event: { animationend: { target: true, name: 'key' } } },
						attr: { 'class': 'key out' },
						children: { attr: { 'class': 'key primary' } }
					}
				},
				'{attr_content}',
				'{default_reflection_one}'
			],
			attr_content_manga: [
				{
					attr: { 'class': 'key in attr-author attr-data' },
					children: {
						attr: { 'class': 'key out' },
						children: {
							attr: { 'class': 'key primary' },
							html: '[[file_manga_title]]',
						}
					}
				},
				{
					attr: { 'class': 'key in attr-name attr-data' },
					children: {
						attr: { 'class': 'key out' },
						children: {
							attr: { 'class': 'key primary' },
							html: '[[file_author]]',
						}
					}
				}
			],
			default_key_0_view: {
				end: true,
				attr: { 'class': 'key in view default-0', },
				style: {
					'--func': 'var(--key-0-func-in, ease-out)',
					'--iterate': 'var(--key-0-iterate-in, 1)',
					'--dir': 'var(--key-0-dir-in, normal)',
					'--opacity': 'var(--key-0-opacity-in, 0)',
					'--opacity-to': 'var(--key-0-opacity-in-to, 1)',
					'--transform': 'var(--key-0-transform-in, none)',
					'--transform-to': 'var(--key-0-transform-in-to, var(--transform))',
				},
				children: {
					end: { event: { animationend: { target: true, name: 'key' } } },
					attr: { 'class': 'key out' },
					style: {
						'--func': 'var(--key-0-func-out, ease-in)',
						'--iterate': 'var(--key-0-iterate-out, 1)',
						'--dir': 'var(--key-0-dir-out, normal)',
						'--opacity': 'var(--key-0-opacity-out, 1)',
						'--opacity-to': 'var(--key-0-opacity-out-to, 0)',
						'--transform': 'var(--key-0-transform-out, none)',
						'--transform-to': 'var(--key-0-transform-out-to, var(--transform))',
					},
					children: {
						attr: { 'class': 'key primary' },
						style: {
							
							'--func': 'var(--key-0-func, ease)',
							'--iterate': 'var(--key-0-iterate, 1)',
							'--dir': 'var(--key-0-dir, normal)',
							'--s': 'var(--key-0-s)', '--s-to': 'var(--key-0-s-to)',
							'--x': 'var(--key-0-x)', '--x-to': 'var(--key-0-x-to)',
							'--y': 'var(--key-0-y)', '--y-to': 'var(--key-0-y-to)',
							'--opacity': 'var(--key-0-opacity, 1)',
							'--opacity-to': 'var(--key-0-opacity-to, var(--opacity))',
							'--transform': 'var(--key-0-transform, none)',
							'--transform-to': 'var(--key-0-transform-to, var(--transform))',
							'--z-index': 'var(--key-0-z-index, 0)'
							
						}
					}
				}
			},
			default_key_0: {
				begin: '[[default_begin_constrain]]',
				end: true,
				attr: {
					'data-share-css-q': '.view-root',
					'data-share-css-filter': '--key-0-dur-remaining'
				},
				style: {
					
					'--key-0-dur-remaining': '!1!s',
					
					'--delay-in': 'var(--key-0-delay-in)',
					'--dur-in': 'var(--key-0-dur-in)',
					'--delay-primary': 'var(--key-0-delay-primary)',
					'--dur-primary': 'var(--key-0-dur-primary)',
					'--delay-out': 'var(--key-0-delay-out)',
					'--dur-out': 'var(--key-0-dur-out)',
					
					'--ref-in-dur-1': 'calc(var(--time-remaining) * (.08 - .08 * var(--has-time-diff)))',
					'--ref-one-delay': 'calc(var(--time-remaining) * (.12 - .12 * var(--has-time-diff)))',
					
				},
				children: [ '{default_key_0_view}', '{default_key_0_reflection}' ],
			},
			default_key_0_reflection: '{default_reflection_in}',
			default_key: [
				{
					end: true,
					attr: { 'class': 'attribute' },
					style: {
						
						'--k-time': 'var(--time-diff)',
						'--ref-one-dur': 'var(--k-time)',
						
					},
					children: '{default_attr}'
				},
				'{default_key_0}',
				{
					begin: { promise: { index: -1, when: 'end' } }, end: true,
					children: [
						{
							end: true,
							attr: {
								'class': 'key in view default-1',
								'data-share-css-q': '.view-root',
								'data-share-css-filter': '--key-1-dur-remaining'
							},
							style: {
								
								'--key-1-dur-remaining': '!1!s',
								
								'--delay-in': 'var(--key-1-delay-in)', '--dur-in': 'var(--key-1-dur-in)',
								'--delay-primary': 'var(--key-1-delay-primary)', '--dur-primary': 'var(--key-1-dur-primary)',
								'--delay-out': 'var(--key-1-delay-out)', '--dur-out': 'var(--key-1-dur-out)',
								
								'--func': 'var(--key-1-func-in, ease-out)',
								'--iterate': 'var(--key-1-iterate-in, 1)',
								'--dir': 'var(--key-1-dir-in, normal)',
								'--opacity': 'var(--key-1-opacity-in, 0)',
								'--opacity-to': 'var(--key-1-opacity-in-to, 1)',
								'--transform': 'var(--key-1-transform-in, none)',
								'--transform-to': 'var(--key-1-transform-in-to, var(--transform))',
								
							},
							children: {
								end: { event: { animationend: { target: true, name: 'key' } } },
								attr: { 'class': 'key out' },
								style: {
									'--func': 'var(--key-1-func-out, ease-in)',
									'--iterate': 'var(--key-1-iterate-out, 1)',
									'--dir': 'var(--key-1-dir-out, normal)',
									'--opacity': 'var(--key-1-opacity-out, 1)',
									'--opacity-to': 'var(--key-1-opacity-out-to, 0)',
									'--transform': 'var(--key-1-transform-out, none)',
									'--transform-to': 'var(--key-1-transform-out-to, var(--transform))',
								},
								children: {
									attr: { 'class': 'key primary', },
									style: {
										
										'--func': 'var(--key-1-func, ease)',
										'--iterate': 'var(--key-1-iterate, 1)',
										'--dir': 'var(--key-1-dir, normal)',
										'--s': 'var(--key-1-s)', '--s-to': 'var(--key-1-s-to)',
										'--x': 'var(--key-1-x)', '--x-to': 'var(--key-1-x-to)',
										'--y': 'var(--key-1-y)', '--y-to': 'var(--key-1-y-to)',
										'--opacity': 'var(--key-1-opacity, 1)',
										'--opacity-to': 'var(--key-1-opacity-to, var(--opacity))',
										'--transform': 'var(--key-1-transform, none)',
										'--transform-to': 'var(--key-1-transform-to, var(--transform))',
										'--z-index': 'var(--key-1-x-index, 0)'
										
									}
								}
							}
						},
						{
							begin: { promise: { index: -1, when: 'end' } }, end: true,
							attr: {
								'class': 'key in view default-2',
								'data-share-css-q': '.view-root',
								'data-share-css-filter': '--key-2-dur-remaining'
							},
							style: {
								
								'--key-2-dur-remaining': '!1!s',
								
								'--delay-in': 'var(--key-2-delay-in)', '--dur-in': 'var(--key-2-dur-in)',
								'--delay-primary': 'var(--key-2-delay-primary)', '--dur-primary': 'var(--key-2-dur-primary, var(--key-2-dur-remaining))',
								'--delay-out': 'var(--key-2-delay-out, calc(var(--key-2-dur-remaining) - var(--dur-out)))', '--dur-out': 'var(--key-2-dur-out)',
								
								'--func': 'var(--key-2-func-in, ease-out)',
								'--iterate': 'var(--key-2-iterate-in, 1)',
								'--dir': 'var(--key-2-dir-in, normal)',
								'--opacity': 'var(--key-2-opacity-in, 0)',
								'--opacity-to': 'var(--key-2-opacity-in-to, 1)',
								'--transform': 'var(--key-2-transform-in, none)',
								'--transform-to': 'var(--key-2-transform-in-to, var(--transform))',
								
							},
							children: {
								end: { event: { animationend: { target: true, name: 'key' } } },
								attr: { 'class': 'key out' },
								style: {
									'--func': 'var(--key-2-func-out, ease-in)',
									'--iterate': 'var(--key-2-iterate-out, 1)',
									'--dir': 'var(--key-2-dir-out, normal)',
									'--transform': 'var(--key-2-transform-out, none)',
									'--transform-to': 'var(--key-2-transform-out-to, var(--transform))',
									'--opacity': 'var(--key-2-opacity-out, 1)',
									'--opacity-to': 'var(--key-2-opacity-out-to, 0)',
								},
								children: {
									attr: { 'class': 'key primary' },
									style: {
										
										'--func': 'var(--key-2-func, ease)',
										'--iterate': 'var(--key-2-iterate, 1)',
										'--dir': 'var(--key-2-dir, normal)',
										'--s': 'var(--key-2-s)', '--s-to': 'var(--key-2-s-to)',
										'--x': 'var(--key-2-x)', '--x-to': 'var(--key-2-x-to)',
										'--y': 'var(--key-2-y)', '--y-to': 'var(--key-2-y-to)',
										'--opacity': 'var(--key-2-opacity, 1)',
										'--opacity-to': 'var(--key-2-opacity-to, var(--opacity))',
										'--transform': 'var(--key-2-transform, none)',
										'--transform-to': 'var(--key-2-transform-to, var(--transform))',
										'--z-index': 'var(--key-2-x-index, 0)'
										
									}
								}
							}
						},
						'{default_reflection_one}'
					]
				}
			],
			default_reflection: [
				{
					end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
					attr: { 'class': 'reflection 0' },
					style: { '--ref-dur': '.8s', '--ref-delay': '0s' }
				},
				{
					end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
					attr: { 'class': 'reflection 1' },
					style: { '--ref-dur': '.4s', '--ref-delay': '.375s' }
				},
				{
					begin: { promise: { index: -4, when: 'begin' } },
					attr: { 'class': 'reflection 2' },
					style: { '--ref-dur': '.5s', '--ref-delay': '0s' }
				}
			],
			// 以下の reflection 内の --time は --base-time にした方が良さそうだが、
			// ここの --time は親要素で上書きされた値である可能性が高いため、置き換える場合はそれを確認した上でやるべき。
			default_reflection_in: [
				{
					end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
					attr: { 'class': 'reflection' },
					style: {
						'--ref-dur': 'var(--ref-in-dur-0, calc(var(--time) * .16))',
						'--ref-delay': 'var(--ref-in-delay-0, 0s)'
					}
				},
				{
					end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
					attr: { 'class': 'reflection' },
					style: {
						'--ref-dur': 'var(--ref-in-dur-1, calc(var(--time) * .08))',
						'--ref-delay': 'var(--ref-in-delay-1, calc(var(--time) * .075))'
					}
				}
			],
			default_reflection_one: {
				end: { event: { animationend: [ { target: true, count: 1, name: 'reflection' } ] } },
				attr: { 'class': 'reflection' },
				style: {
					'--ref-dur': 'var(--ref-one-dur, calc(var(--time) * .1))',
					'--ref-delay': 'var(--ref-one-delay, 0s)'
				}
			},
		}
		
	}
	
},

version: '0.35',

changes: []

};