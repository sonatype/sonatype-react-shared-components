/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import {
  NxBackButton,
  NxPageMain,
  NxStatefulGlobalSidebar2,
  NxGlobalSidebar2NavigationLink,
  NxTextLink,
  NxGlobalFooter2,
  NxTable,
  NxInfoAlert,
  NxH1,
  NxTableContainer,
  NxGlobalHeader2,
  NxFilterInput,
  NxStatefulNavigationDropdown
} from '@sonatype/react-shared-components';
import {
  faArrowLeft,
  faArrowRight,
  faLink,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';

export default function NxGlobalFooter2ViewportSizedExample() {
  const [filterInputValue, setFilterInputValue] = useState('');

  return (
    <>
      <NxGlobalHeader2 homeHref="#/">
        <NxFilterInput placeholder="Search" searchIcon value={filterInputValue} onChange={setFilterInputValue} />
        <NxStatefulNavigationDropdown title="User" icon={faUserCircle}>
          <button onClick={() => alert('clicked')} className="nx-dropdown-button">
            Button Link
          </button>
        </NxStatefulNavigationDropdown>
      </NxGlobalHeader2>
      <NxStatefulGlobalSidebar2 isDefaultOpen={false}
                                toggleOpenIcon={faArrowLeft}
                                toggleCloseIcon={faArrowRight}>
        <NxGlobalSidebar2NavigationLink icon={faLink} text="NxGlobalSidebar" href="#/pages/Global%20Sidebar"/>
      </NxStatefulGlobalSidebar2>
      <NxGlobalFooter2.Container className="nx-viewport-sized">
        <NxPageMain className="nx-viewport-sized__container">
          <NxBackButton targetPageTitle="nx-viewport-sized Docs" href="#/pages/nx-viewport-sized"/>
          <NxH1>Viewport Sized Example</NxH1>
          <section className="nx-tile nx-viewport-sized__container">
            <header className="nx-tile-header">
              <div className="nx-tile-header__title">
                <h2 className="nx-h2">A table, with some stuff above</h2>
              </div>
            </header>
            <div className="nx-tile-content nx-viewport-sized__container">
              <p className="nx-p">
                Observe that the table below, along with its containing tile, shrinks to fit the viewport and gets a
                scrollbar. As the page size is adjusted, the table size changes accordingly.
              </p>
              <p className="nx-p" style={{ width: '400px' }}>
                This paragraph has an explicit, non-100% width. It is still left-aligned within the tile just like it
                would be in block layout.
              </p>
              <p className="nx-p">
                Single line paragraph.
              </p>
              <NxInfoAlert>
                This alert is stretched as expected.
              </NxInfoAlert>
              <NxTableContainer className="nx-scrollable nx-viewport-sized__scrollable" tabIndex={0}>
                <NxTable>
                  <NxTable.Head>
                    <NxTable.Row>
                      <NxTable.Cell>Oct</NxTable.Cell>
                      <NxTable.Cell>Dev</NxTable.Cell>
                      <NxTable.Cell>Hex</NxTable.Cell>
                      <NxTable.Cell>Char</NxTable.Cell>
                    </NxTable.Row>
                  </NxTable.Head>
                  <NxTable.Body>
                    <NxTable.Row>
                      <NxTable.Cell>040</NxTable.Cell>
                      <NxTable.Cell>32</NxTable.Cell>
                      <NxTable.Cell>20</NxTable.Cell>
                      <NxTable.Cell>(space)</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>041</NxTable.Cell>
                      <NxTable.Cell>33</NxTable.Cell>
                      <NxTable.Cell>21</NxTable.Cell>
                      <NxTable.Cell>!</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>042</NxTable.Cell>
                      <NxTable.Cell>34</NxTable.Cell>
                      <NxTable.Cell>22</NxTable.Cell>
                      <NxTable.Cell>{'"'}</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>043</NxTable.Cell>
                      <NxTable.Cell>35</NxTable.Cell>
                      <NxTable.Cell>23</NxTable.Cell>
                      <NxTable.Cell>#</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>044</NxTable.Cell>
                      <NxTable.Cell>36</NxTable.Cell>
                      <NxTable.Cell>24</NxTable.Cell>
                      <NxTable.Cell>$</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>045</NxTable.Cell>
                      <NxTable.Cell>37</NxTable.Cell>
                      <NxTable.Cell>25</NxTable.Cell>
                      <NxTable.Cell>%</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>046</NxTable.Cell>
                      <NxTable.Cell>38</NxTable.Cell>
                      <NxTable.Cell>26</NxTable.Cell>
                      <NxTable.Cell>{'&'}</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>047</NxTable.Cell>
                      <NxTable.Cell>39</NxTable.Cell>
                      <NxTable.Cell>27</NxTable.Cell>
                      <NxTable.Cell>'</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>050</NxTable.Cell>
                      <NxTable.Cell>40</NxTable.Cell>
                      <NxTable.Cell>28</NxTable.Cell>
                      <NxTable.Cell>(</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>051</NxTable.Cell>
                      <NxTable.Cell>41</NxTable.Cell>
                      <NxTable.Cell>29</NxTable.Cell>
                      <NxTable.Cell>)</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>052</NxTable.Cell>
                      <NxTable.Cell>42</NxTable.Cell>
                      <NxTable.Cell>2A</NxTable.Cell>
                      <NxTable.Cell>*</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>053</NxTable.Cell>
                      <NxTable.Cell>43</NxTable.Cell>
                      <NxTable.Cell>2B</NxTable.Cell>
                      <NxTable.Cell>+</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>054</NxTable.Cell>
                      <NxTable.Cell>44</NxTable.Cell>
                      <NxTable.Cell>2C</NxTable.Cell>
                      <NxTable.Cell>,</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>055</NxTable.Cell>
                      <NxTable.Cell>45</NxTable.Cell>
                      <NxTable.Cell>2D</NxTable.Cell>
                      <NxTable.Cell>-</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>056</NxTable.Cell>
                      <NxTable.Cell>46</NxTable.Cell>
                      <NxTable.Cell>2E</NxTable.Cell>
                      <NxTable.Cell>.</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>057</NxTable.Cell>
                      <NxTable.Cell>47</NxTable.Cell>
                      <NxTable.Cell>2F</NxTable.Cell>
                      <NxTable.Cell>/</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>060</NxTable.Cell>
                      <NxTable.Cell>48</NxTable.Cell>
                      <NxTable.Cell>30</NxTable.Cell>
                      <NxTable.Cell>0</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>061</NxTable.Cell>
                      <NxTable.Cell>49</NxTable.Cell>
                      <NxTable.Cell>31</NxTable.Cell>
                      <NxTable.Cell>1</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>062</NxTable.Cell>
                      <NxTable.Cell>50</NxTable.Cell>
                      <NxTable.Cell>32</NxTable.Cell>
                      <NxTable.Cell>2</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>063</NxTable.Cell>
                      <NxTable.Cell>51</NxTable.Cell>
                      <NxTable.Cell>33</NxTable.Cell>
                      <NxTable.Cell>3</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>064</NxTable.Cell>
                      <NxTable.Cell>52</NxTable.Cell>
                      <NxTable.Cell>34</NxTable.Cell>
                      <NxTable.Cell>4</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>065</NxTable.Cell>
                      <NxTable.Cell>53</NxTable.Cell>
                      <NxTable.Cell>35</NxTable.Cell>
                      <NxTable.Cell>5</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>066</NxTable.Cell>
                      <NxTable.Cell>54</NxTable.Cell>
                      <NxTable.Cell>36</NxTable.Cell>
                      <NxTable.Cell>6</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>067</NxTable.Cell>
                      <NxTable.Cell>55</NxTable.Cell>
                      <NxTable.Cell>37</NxTable.Cell>
                      <NxTable.Cell>7</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>070</NxTable.Cell>
                      <NxTable.Cell>56</NxTable.Cell>
                      <NxTable.Cell>38</NxTable.Cell>
                      <NxTable.Cell>8</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>071</NxTable.Cell>
                      <NxTable.Cell>57</NxTable.Cell>
                      <NxTable.Cell>39</NxTable.Cell>
                      <NxTable.Cell>9</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>072</NxTable.Cell>
                      <NxTable.Cell>58</NxTable.Cell>
                      <NxTable.Cell>3A</NxTable.Cell>
                      <NxTable.Cell>:</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>073</NxTable.Cell>
                      <NxTable.Cell>59</NxTable.Cell>
                      <NxTable.Cell>3B</NxTable.Cell>
                      <NxTable.Cell>;</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>074</NxTable.Cell>
                      <NxTable.Cell>60</NxTable.Cell>
                      <NxTable.Cell>3C</NxTable.Cell>
                      <NxTable.Cell>&lt;</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>075</NxTable.Cell>
                      <NxTable.Cell>61</NxTable.Cell>
                      <NxTable.Cell>3D</NxTable.Cell>
                      <NxTable.Cell>=</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>076</NxTable.Cell>
                      <NxTable.Cell>62</NxTable.Cell>
                      <NxTable.Cell>3E</NxTable.Cell>
                      <NxTable.Cell>&gt;</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>077</NxTable.Cell>
                      <NxTable.Cell>63</NxTable.Cell>
                      <NxTable.Cell>3F</NxTable.Cell>
                      <NxTable.Cell>?</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>100</NxTable.Cell>
                      <NxTable.Cell>64</NxTable.Cell>
                      <NxTable.Cell>40</NxTable.Cell>
                      <NxTable.Cell>@</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>101</NxTable.Cell>
                      <NxTable.Cell>65</NxTable.Cell>
                      <NxTable.Cell>41</NxTable.Cell>
                      <NxTable.Cell>A</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>102</NxTable.Cell>
                      <NxTable.Cell>66</NxTable.Cell>
                      <NxTable.Cell>42</NxTable.Cell>
                      <NxTable.Cell>B</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>103</NxTable.Cell>
                      <NxTable.Cell>67</NxTable.Cell>
                      <NxTable.Cell>43</NxTable.Cell>
                      <NxTable.Cell>C</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>104</NxTable.Cell>
                      <NxTable.Cell>68</NxTable.Cell>
                      <NxTable.Cell>44</NxTable.Cell>
                      <NxTable.Cell>D</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>105</NxTable.Cell>
                      <NxTable.Cell>69</NxTable.Cell>
                      <NxTable.Cell>45</NxTable.Cell>
                      <NxTable.Cell>E</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>106</NxTable.Cell>
                      <NxTable.Cell>70</NxTable.Cell>
                      <NxTable.Cell>46</NxTable.Cell>
                      <NxTable.Cell>F</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>107</NxTable.Cell>
                      <NxTable.Cell>71</NxTable.Cell>
                      <NxTable.Cell>47</NxTable.Cell>
                      <NxTable.Cell>G</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>110</NxTable.Cell>
                      <NxTable.Cell>72</NxTable.Cell>
                      <NxTable.Cell>48</NxTable.Cell>
                      <NxTable.Cell>H</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>111</NxTable.Cell>
                      <NxTable.Cell>73</NxTable.Cell>
                      <NxTable.Cell>49</NxTable.Cell>
                      <NxTable.Cell>I</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>112</NxTable.Cell>
                      <NxTable.Cell>74</NxTable.Cell>
                      <NxTable.Cell>4A</NxTable.Cell>
                      <NxTable.Cell>J</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>113</NxTable.Cell>
                      <NxTable.Cell>75</NxTable.Cell>
                      <NxTable.Cell>4B</NxTable.Cell>
                      <NxTable.Cell>K</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>114</NxTable.Cell>
                      <NxTable.Cell>76</NxTable.Cell>
                      <NxTable.Cell>4C</NxTable.Cell>
                      <NxTable.Cell>L</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>115</NxTable.Cell>
                      <NxTable.Cell>77</NxTable.Cell>
                      <NxTable.Cell>4D</NxTable.Cell>
                      <NxTable.Cell>M</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>116</NxTable.Cell>
                      <NxTable.Cell>78</NxTable.Cell>
                      <NxTable.Cell>4E</NxTable.Cell>
                      <NxTable.Cell>N</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>117</NxTable.Cell>
                      <NxTable.Cell>79</NxTable.Cell>
                      <NxTable.Cell>4F</NxTable.Cell>
                      <NxTable.Cell>O</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>120</NxTable.Cell>
                      <NxTable.Cell>80</NxTable.Cell>
                      <NxTable.Cell>50</NxTable.Cell>
                      <NxTable.Cell>P</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>121</NxTable.Cell>
                      <NxTable.Cell>81</NxTable.Cell>
                      <NxTable.Cell>51</NxTable.Cell>
                      <NxTable.Cell>Q</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>122</NxTable.Cell>
                      <NxTable.Cell>82</NxTable.Cell>
                      <NxTable.Cell>52</NxTable.Cell>
                      <NxTable.Cell>R</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>123</NxTable.Cell>
                      <NxTable.Cell>83</NxTable.Cell>
                      <NxTable.Cell>53</NxTable.Cell>
                      <NxTable.Cell>S</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>124</NxTable.Cell>
                      <NxTable.Cell>84</NxTable.Cell>
                      <NxTable.Cell>54</NxTable.Cell>
                      <NxTable.Cell>T</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>125</NxTable.Cell>
                      <NxTable.Cell>85</NxTable.Cell>
                      <NxTable.Cell>55</NxTable.Cell>
                      <NxTable.Cell>U</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>126</NxTable.Cell>
                      <NxTable.Cell>86</NxTable.Cell>
                      <NxTable.Cell>56</NxTable.Cell>
                      <NxTable.Cell>V</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>127</NxTable.Cell>
                      <NxTable.Cell>87</NxTable.Cell>
                      <NxTable.Cell>57</NxTable.Cell>
                      <NxTable.Cell>W</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>130</NxTable.Cell>
                      <NxTable.Cell>88</NxTable.Cell>
                      <NxTable.Cell>58</NxTable.Cell>
                      <NxTable.Cell>X</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>131</NxTable.Cell>
                      <NxTable.Cell>89</NxTable.Cell>
                      <NxTable.Cell>59</NxTable.Cell>
                      <NxTable.Cell>Y</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>132</NxTable.Cell>
                      <NxTable.Cell>90</NxTable.Cell>
                      <NxTable.Cell>5A</NxTable.Cell>
                      <NxTable.Cell>Z</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>133</NxTable.Cell>
                      <NxTable.Cell>91</NxTable.Cell>
                      <NxTable.Cell>5B</NxTable.Cell>
                      <NxTable.Cell>[</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>134</NxTable.Cell>
                      <NxTable.Cell>92</NxTable.Cell>
                      <NxTable.Cell>5C</NxTable.Cell>
                      <NxTable.Cell>\</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>135</NxTable.Cell>
                      <NxTable.Cell>93</NxTable.Cell>
                      <NxTable.Cell>5D</NxTable.Cell>
                      <NxTable.Cell>]</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>136</NxTable.Cell>
                      <NxTable.Cell>94</NxTable.Cell>
                      <NxTable.Cell>5E</NxTable.Cell>
                      <NxTable.Cell>^</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>137</NxTable.Cell>
                      <NxTable.Cell>95</NxTable.Cell>
                      <NxTable.Cell>5F</NxTable.Cell>
                      <NxTable.Cell>_</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>140</NxTable.Cell>
                      <NxTable.Cell>96</NxTable.Cell>
                      <NxTable.Cell>60</NxTable.Cell>
                      <NxTable.Cell>`</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>141</NxTable.Cell>
                      <NxTable.Cell>97</NxTable.Cell>
                      <NxTable.Cell>61</NxTable.Cell>
                      <NxTable.Cell>a</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>142</NxTable.Cell>
                      <NxTable.Cell>98</NxTable.Cell>
                      <NxTable.Cell>62</NxTable.Cell>
                      <NxTable.Cell>b</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>143</NxTable.Cell>
                      <NxTable.Cell>99</NxTable.Cell>
                      <NxTable.Cell>63</NxTable.Cell>
                      <NxTable.Cell>c</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>144</NxTable.Cell>
                      <NxTable.Cell>100</NxTable.Cell>
                      <NxTable.Cell>64</NxTable.Cell>
                      <NxTable.Cell>d</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>145</NxTable.Cell>
                      <NxTable.Cell>101</NxTable.Cell>
                      <NxTable.Cell>65</NxTable.Cell>
                      <NxTable.Cell>e</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>146</NxTable.Cell>
                      <NxTable.Cell>102</NxTable.Cell>
                      <NxTable.Cell>66</NxTable.Cell>
                      <NxTable.Cell>f</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>147</NxTable.Cell>
                      <NxTable.Cell>103</NxTable.Cell>
                      <NxTable.Cell>67</NxTable.Cell>
                      <NxTable.Cell>g</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>150</NxTable.Cell>
                      <NxTable.Cell>104</NxTable.Cell>
                      <NxTable.Cell>68</NxTable.Cell>
                      <NxTable.Cell>h</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>151</NxTable.Cell>
                      <NxTable.Cell>105</NxTable.Cell>
                      <NxTable.Cell>69</NxTable.Cell>
                      <NxTable.Cell>i</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>152</NxTable.Cell>
                      <NxTable.Cell>106</NxTable.Cell>
                      <NxTable.Cell>6A</NxTable.Cell>
                      <NxTable.Cell>j</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>153</NxTable.Cell>
                      <NxTable.Cell>107</NxTable.Cell>
                      <NxTable.Cell>6B</NxTable.Cell>
                      <NxTable.Cell>k</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>154</NxTable.Cell>
                      <NxTable.Cell>108</NxTable.Cell>
                      <NxTable.Cell>6C</NxTable.Cell>
                      <NxTable.Cell>l</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>155</NxTable.Cell>
                      <NxTable.Cell>109</NxTable.Cell>
                      <NxTable.Cell>6D</NxTable.Cell>
                      <NxTable.Cell>m</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>156</NxTable.Cell>
                      <NxTable.Cell>110</NxTable.Cell>
                      <NxTable.Cell>6E</NxTable.Cell>
                      <NxTable.Cell>n</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>157</NxTable.Cell>
                      <NxTable.Cell>111</NxTable.Cell>
                      <NxTable.Cell>6F</NxTable.Cell>
                      <NxTable.Cell>o</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>160</NxTable.Cell>
                      <NxTable.Cell>112</NxTable.Cell>
                      <NxTable.Cell>70</NxTable.Cell>
                      <NxTable.Cell>p</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>161</NxTable.Cell>
                      <NxTable.Cell>113</NxTable.Cell>
                      <NxTable.Cell>71</NxTable.Cell>
                      <NxTable.Cell>q</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>162</NxTable.Cell>
                      <NxTable.Cell>114</NxTable.Cell>
                      <NxTable.Cell>72</NxTable.Cell>
                      <NxTable.Cell>r</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>163</NxTable.Cell>
                      <NxTable.Cell>115</NxTable.Cell>
                      <NxTable.Cell>73</NxTable.Cell>
                      <NxTable.Cell>s</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>164</NxTable.Cell>
                      <NxTable.Cell>116</NxTable.Cell>
                      <NxTable.Cell>74</NxTable.Cell>
                      <NxTable.Cell>t</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>165</NxTable.Cell>
                      <NxTable.Cell>117</NxTable.Cell>
                      <NxTable.Cell>75</NxTable.Cell>
                      <NxTable.Cell>u</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>166</NxTable.Cell>
                      <NxTable.Cell>118</NxTable.Cell>
                      <NxTable.Cell>76</NxTable.Cell>
                      <NxTable.Cell>v</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>167</NxTable.Cell>
                      <NxTable.Cell>119</NxTable.Cell>
                      <NxTable.Cell>77</NxTable.Cell>
                      <NxTable.Cell>w</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>170</NxTable.Cell>
                      <NxTable.Cell>120</NxTable.Cell>
                      <NxTable.Cell>78</NxTable.Cell>
                      <NxTable.Cell>x</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>171</NxTable.Cell>
                      <NxTable.Cell>121</NxTable.Cell>
                      <NxTable.Cell>79</NxTable.Cell>
                      <NxTable.Cell>y</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>172</NxTable.Cell>
                      <NxTable.Cell>122</NxTable.Cell>
                      <NxTable.Cell>7A</NxTable.Cell>
                      <NxTable.Cell>z</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>173</NxTable.Cell>
                      <NxTable.Cell>123</NxTable.Cell>
                      <NxTable.Cell>7B</NxTable.Cell>
                      <NxTable.Cell>{'{'}</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>174</NxTable.Cell>
                      <NxTable.Cell>124</NxTable.Cell>
                      <NxTable.Cell>7C</NxTable.Cell>
                      <NxTable.Cell>|</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>175</NxTable.Cell>
                      <NxTable.Cell>125</NxTable.Cell>
                      <NxTable.Cell>7D</NxTable.Cell>
                      <NxTable.Cell>{'}'}</NxTable.Cell>
                    </NxTable.Row>
                    <NxTable.Row>
                      <NxTable.Cell>176</NxTable.Cell>
                      <NxTable.Cell>126</NxTable.Cell>
                      <NxTable.Cell>7F</NxTable.Cell>
                      <NxTable.Cell>~</NxTable.Cell>
                    </NxTable.Row>
                  </NxTable.Body>
                </NxTable>
              </NxTableContainer>
            </div>
          </section>
        </NxPageMain>
        <NxGlobalFooter2>
          <span>Thank you for choosing RSC</span>
          <NxTextLink href="/#">Home</NxTextLink>
          <NxTextLink href="/#">Also Home</NxTextLink>
        </NxGlobalFooter2>
      </NxGlobalFooter2.Container>
    </>
  );
}
