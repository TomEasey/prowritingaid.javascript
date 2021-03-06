/**
 * ProWritingAid API V2
 * Official ProWritingAid API Version 2
 *
 * OpenAPI spec version: v2
 * Contact: hello@prowritingaid.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AnalysisSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AnalysisSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.ProWritingAidApi) {
      root.ProWritingAidApi = {};
    }
    root.ProWritingAidApi.HtmlAnalysisResponse = factory(root.ProWritingAidApi.ApiClient, root.ProWritingAidApi.AnalysisSummary);
  }
}(this, function(ApiClient, AnalysisSummary) {
  'use strict';




  /**
   * The HtmlAnalysisResponse model module.
   * @module model/HtmlAnalysisResponse
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>HtmlAnalysisResponse</code>.
   * @alias module:model/HtmlAnalysisResponse
   * @class
   * @param html {String} Result in form of html. Contains tags with meta-information
   * @param wordCount {Number} Number of processed words
   * @param summaries {Array.<module:model/AnalysisSummary>} 
   */
  var exports = function(html, wordCount, summaries) {
    var _this = this;

    _this['Html'] = html;
    _this['WordCount'] = wordCount;
    _this['Summaries'] = summaries;
  };

  /**
   * Constructs a <code>HtmlAnalysisResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlAnalysisResponse} obj Optional instance to populate.
   * @return {module:model/HtmlAnalysisResponse} The populated <code>HtmlAnalysisResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Html')) {
        obj['Html'] = ApiClient.convertToType(data['Html'], 'String');
      }
      if (data.hasOwnProperty('WordCount')) {
        obj['WordCount'] = ApiClient.convertToType(data['WordCount'], 'Number');
      }
      if (data.hasOwnProperty('Summaries')) {
        obj['Summaries'] = ApiClient.convertToType(data['Summaries'], [AnalysisSummary]);
      }
    }
    return obj;
  }

  /**
   * Result in form of html. Contains tags with meta-information
   * @member {String} Html
   */
  exports.prototype['Html'] = undefined;
  /**
   * Number of processed words
   * @member {Number} WordCount
   */
  exports.prototype['WordCount'] = undefined;
  /**
   * 
   * @member {Array.<module:model/AnalysisSummary>} Summaries
   */
  exports.prototype['Summaries'] = undefined;



  return exports;
}));


